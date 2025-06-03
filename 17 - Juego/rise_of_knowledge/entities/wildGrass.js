import { config } from "../config.js";
import { QuestionUiManager } from "../managers/questionUiManager.js";

/**
 * Esta clase define la entidad para la hierba salvaje.
 */
export class WildGrass {
  x = 0; // Coordenada X
  y = 0; // Coordenada Y
  sprite = new Image(); // Sprite de la hierba
  size = config.tileSize; // Tamaño de la hierba
  questionUiManager = new QuestionUiManager(); // Instancia para manejar preguntas

  // Mapa para llevar control de contacto por entidad
  entitiesInContact = new Map();

  // Bandera para lanzar la pregunta solo una vez por contacto
  // cooldown = false;
  // contador = 0; // Contador para controlar el lanzamiento de preguntas

  /**
   * Constructor
   * @param {number} x Posición X
   * @param {number} y Posición Y
   */
  constructor(x, y, customDefaultSprite = null, customDownSprite = null) {
    this.x = x;
    this.y = y;

    // Rutas de los sprites por defecto
    this.defaultSpritePath = "./sprites/resources/wildGrass.png";
    this.downSpritePath = "./sprites/resources/wildGrassDown.png";

    // Usa los personalizados si los dan, si no usa los por defecto
    this.defaultSprite = customDefaultSprite || this.defaultSpritePath;
    this.downSprite = customDownSprite || this.downSpritePath;

    this.sprite.src = this.defaultSprite;

    this.sprite.onerror = () =>
      console.log("Error al cargar el sprite de WildGrass:", this.sprite.src);
  }


  /**
   * Dibuja la hierba en el canvas.
   */
  draw() {
    config.ctx.drawImage(this.sprite, this.x, this.y, this.size, this.size);
  }

  getQuestion() {
    // Método para obtener una pregunta aleatoria de la lista de preguntas.
    const questions = JSON.parse(sessionStorage.getItem('block_questions'));
    if (questions?.length > 0) {
      const randomIndex = Math.floor(Math.random() * questions.length);
      return questions[randomIndex];
    } else {
      console.error("No hay preguntas disponibles.");
      return null;
    }
  }

  /**
   * Función que actualiza el estado del sprite según si la entidad está sobre la hierba.
   * Además, lanza la pregunta una sola vez mientras el jugador la pisa.
   */
  cross(entity) {
    const isInside = this.isEntityInGrass(entity);
    const wasInside = this.entitiesInContact.get(entity) || false;

    if (isInside && !wasInside) {
      // Primera vez que entra
      this.entitiesInContact.set(entity, true);

      // Cambiar sprite al pisarla
      this.sprite.src = this.downSprite;

      // Si es jugador, lanzar pregunta solo una vez
      if (entity.isPlayer) {
        const randomChance = Math.floor(Math.random() * 100) + 1;
        console.log(`🎲 Tirada de probabilidad: ${randomChance}, Se necesita <= ${config.questionProbability}`);

        if (randomChance <= config.questionProbability) {
          const question = this.getQuestion();
          if (question) {
            console.log("✅ Iniciando pregunta...");
            config.questionUiManager.startQuiz([question], this);
            entity.canMove = false;

            config.questionUiManager.finishQuiz = (result) => {
              if (result) {
                config.dialogUiManager.setQuestionSuccessDialog();
              } else {
                config.dialogUiManager.setLearningFailedDialog();
              }
              entity.canMove = true;
            };
          }
        }
      }

    } else if (!isInside && wasInside) {
      // Acaba de salir
      this.entitiesInContact.delete(entity);

      // Restaurar sprite si nadie más la pisa
      if (![...this.entitiesInContact.values()].includes(true)) {
        this.sprite.src = this.defaultSprite;
      }
    }
    // Si sigue dentro o fuera, no hacemos nada
  }

  /**
   * Función que verifica si la entidad está dentro de los límites de la hierba.
   */
  isEntityInGrass(entity) {
    const offset = 8; // Reduce la zona de detección en 8px para mayor precisión.

    return (
      entity.x + offset < this.x + this.size - offset &&
      entity.x + config.tileSize - offset > this.x + offset &&
      entity.y + offset < this.y + this.size - offset &&
      entity.y + config.tileSize - offset > this.y + offset
    );
  }

}
