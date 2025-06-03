//Declaramos las dependencias a usar.
import { config } from "../config.js";
import { WiseMan } from "../entities/wiseman.js";
import { WoodCutter } from "./../entities/woodcutter.js";
import { WildGrass } from "./../entities/wildgrass.js";

/**
 * Esta clase define la interfaz de preguntas del juego.
 * @author Luis Antonio Expósito Sánchez
 */
export class QuestionUiManager {
  //Declaramos las propiedades de la clase.
  actioner; //Almacena la entidad que ha iniciado la interfaz de preguntas.
  questions; //Almacena la lista de preguntas.
  actualQuestion; //Almacena el índice de la pregunta que está siendo mostrada.
  quizContainer = document.getElementById("quiz-container"); //Almacena el elemento de la UI que muestra la interfaz de preguntas.
  question = document.getElementById("question"); //Almacena el elemento de la UI donde mostrar la pregunta.
  answersContainer = document.getElementById("answers-container"); //Almacena el elemento de la UI que contiene las respuestas.
  isFinalExam = false; //Almacena true si estamos en un examen final, false en caso contrario.
  wrongAnswers = 0; //Almacena la cantidad de preguntas que ha fallado el jugador en el examen final.
  answeredQuestions = []; // NUEVO Almacena las preguntas respondidas correctamente

  /**
   * Función inicia la interfaz de preguntas.
   * @param questions Preguntas que se van a mostrar.
   * @param actioner Datos de la entidad que ha iniciado la interfaz de preguntas.
   * @author Luis Antonio Expósito Sánchez
   */
  startQuiz(questions, actioner) {
    //Indicamos que no es un examen final.
    this.isFinalExam = false;

    //Inicializamos la interfaz.
    this.actualQuestion = 0;
    this.questions = questions;
    this.actioner = actioner;

    //Mostramos la interfaz de preguntas.
    this.quizContainer.style.display = "flex";

    //Mostramos la primera pregunta.
    this.setQuestion(this.actualQuestion);
  }

  /**
   * Función que inicia la interfaz de preguntas para el examen final.
   * @param questions Preguntas que se van a mostrar.
   * @param actioner Datos de la entidad que ha iniciado la interfaz de preguntas.
   * @author Luis Antonio Expósito Sánchez
   */
  startFinalQuiz(questions, actioner) {
    //Iniciamos el examen.
    this.startQuiz(questions, actioner);

    //Indicamos que es un examen final.
    this.isFinalExam = true;
  }

  /**
   * Función que finaliza la interfaz de preguntas.
   * @param result True si las preguntas se han resuelto correctamente, false en caso contrario.
   * @author Luis Antonio Expósito Sánchez
   */
  finishQuiz(result) {
    //Ocultamos la interfaz de preguntas.
    this.quizContainer.style.display = "none";

    //Comprobamos si se han resuelto correctamente las preguntas.
    if (result) {
      // Validamos el tipo de entidad que ha ordenado iniciar la interfaz.
      if (this.actioner instanceof WildGrass) {
        // Mostramos el mensaje de "Enhorabuena" para WildGrass.
        config.dialogUiManager.setQuestionSuccessDialog();
      } else if (this.actioner instanceof WoodCutter) {
        //Aumentamos el nivel de habilidad de leñador al jugador.
        config.player.habilities.chop += 1;

        //Mostramos el mensaje de éxito.
        config.dialogUiManager.setLearningSucceededDialog(this.actioner);
      } else if (this.actioner instanceof WiseMan) {
        //Almacenamos las notas.
        // Generate question IDs and store grades
        const grades = {
          right: this.questions.length - this.wrongAnswers,
          failed: this.wrongAnswers,
          questions: this.questions.map((question, index) => ({
            id: index + 1,
            question: question.question,
          })),
        };
        console.log("Grades being stored in sessionStorage:", grades);
        sessionStorage.setItem("block_grades", JSON.stringify(grades));
        const retrievedGrades = JSON.parse(
          sessionStorage.getItem("block_grades")
        );
        console.log("Grades retrieved from sessionStorage:", retrievedGrades);

        //Finalizamos el juego.
        finishCourse();
        //Redirigimos el usuario a la pantalla de resúmen.
        window.top.location = appBaseUrl + "dashboard/game_resume.html";
      }
    }
    //Entendemos que se ha fallado.
    else {
      config.dialogUiManager.setLearningFailedDialog();
    }
  }

  /**
   * Función que muestra una pregunta.
   * @param index Índice de la pregunta a mostrar.
   * @author Luis Antonio Expósito Sánchez
   */
  setQuestion(index) {
    //Declaramos las variables a usar.
    let question = this.questions[index]; //Almacena los datos de la pregunta a mostrar

    //Mostramos el enunciado.
    this.question.innerText = question.question;

    //Limpiamos el contenedor de respuestas para evitar acumulación
    this.answersContainer.innerHTML = "";

    //Usamos un DocumentFragment para mejorar el rendimiento.
    const fragment = document.createDocumentFragment();

    //Iteramos las respuestas.
    question.answers.forEach((answer, index) => {
      let answerElement = document.createElement("span");
      answerElement.classList.add("answer");
      answerElement.innerText = answer.answer;

      //Añadimos el evento de click.
      answerElement.addEventListener("click", () => this.validateAnswer(index));

      //Añadimos el elemento al fragmento.
      fragment.appendChild(answerElement);
    });

    // Añadimos el fragmento al contenedor en una sola operación
    this.answersContainer.appendChild(fragment);
  }

  /**
   * Función que valida la respuesta seleccionada.
   * @param answerIndex Respuesta seleccionada.
   * @author Luis Antonio Expósito Sánchez
   */
  validateAnswer(answerIndex) {
    // Ocultamos la interfaz de preguntas inmediatamente.
    this.quizContainer.style.display = "none";

    //Declaramos las variables a usar.
    let question = this.questions[this.actualQuestion]; //Almacena los datos de la pregunta a mostrar.
    let selectedAnswer = question.answers[answerIndex];

    // Comprobamos si la respuesta es correcta.
    if (selectedAnswer.isValid) {
      // Almacenar la pregunta y la respuesta correcta
      this.storeCorrectAnswer(question, selectedAnswer);

      //Comprobamos si ya hemos acabado las preguntas.
      if (this.actualQuestion + 1 == this.questions.length) {
        //Finalizamos la interfaz de preguntas.
        this.finishQuiz(true);
      }
      //Entendemos que aún hay preguntas.
      else {
        this.actualQuestion++;

        //Mostramos la siguiente pregunta.
        this.setQuestion(this.actualQuestion);

        // Volvemos a mostrar el contenedor de preguntas.
        this.quizContainer.style.display = "flex";
      }
    }
    //Entendemos que la respuesta no es correcta.
    else {
      //Comprobamos si no es un examen final.
      if (!this.isFinalExam) {
        //Finalizamos la interfaz de preguntas.
        this.finishQuiz(false);
      }
      //Entendemos que es un examen final.
      else {
        this.wrongAnswers++;

        //Comprobamos si ya hemos acabado las preguntas.
        if (this.actualQuestion + 1 == this.questions.length) {
          //Finalizamos la interfaz de preguntas.
          this.finishQuiz(true);
        }
        //Entendemos que no las hemos acabado.
        else {
          this.actualQuestion++;

          //Mostramos la siguiente pregunta.
          this.setQuestion(this.actualQuestion);

          // Volvemos a mostrar el contenedor de preguntas.
          this.quizContainer.style.display = "flex";
        }
      }
    }
  }

  /**
   * Función para almacenar la pregunta y la respuesta correcta en localStorage
   * @param question La pregunta respondida correctamente
   * @param correctAnswer La respuesta correcta
   */
  storeCorrectAnswer(question, correctAnswer) {
    let correctAnswers =
      JSON.parse(localStorage.getItem("correctAnswers")) || [];

    // Verificar si la pregunta ya está almacenada
    const existingQuestionIndex = correctAnswers.findIndex(
      (item) => item.question === question.question
    );

    if (existingQuestionIndex === -1) {
      // Si la pregunta no existe, agregarla al array
      correctAnswers.push({
        question: question.question,
        correctAnswer: correctAnswer.answer,
      });

      localStorage.setItem("correctAnswers", JSON.stringify(correctAnswers));
    }
  }
}
