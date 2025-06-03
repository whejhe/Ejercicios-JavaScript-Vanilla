//Declaramos las dependencias a usar.
import { config } from '../config.js';

/**
 * Esta clase define la interfaz de preguntas del juego.
 * @author Luis Antonio Expósito Sánchez
 */
export class DialogUiManager {
    //Declaramos las propiedades de la clase.
    dialogContainer = document.getElementById('dialog-container'); //Almacena el elemento de la UI que muestra la interfaz de diálogo.
    dialog = document.getElementById('dialog'); //Almacena el elemento de la UI donde mostrar el diálogo.

    /**
     * Función cierra la interfaz de diálogo.
     * @author Luis Antonio Expósito Sánchez
     */
    finishDialog() {
        //Cerramos la interfaz de diálogo.
        this.dialogContainer.style.display = 'none';
    }

    /**
     * Función que setea el diálogo que da inicio a un proceso de aprendizaje de habilidad.
     * @param actioner Entidad que inicia el proceso de aprendizaje.
     * @author Luis Antonio Expósito Sánchez
     */
    startLearningDialog(actioner) {
        //Declaramos las variables a usar.
        let userData = JSON.parse(sessionStorage.getItem('user_data')); //Almacena los datos del usuario.

        //Mostramos la interfaz de diálogo.
        this.dialogContainer.style.display = 'flex';
        
        //Generamos el diálogo de aprendizaje.
        this.dialog.innerHTML = `
            <p>¡Hola ${ userData.name }! Veo que quieres mejorar tu habilidad de ${ actioner.name }. 
                Voy a necesitar <img src="./sprites/ui/wood_resource.png" height="24px" width="24px"/>${ actioner.woodCost }
                y <img src="./sprites/ui/stone_resource.png" height="24px" width="24px"/>${ actioner.stoneCost } para prepararlo
                todo. ¿Quieres seguir adelante?
            </p>
            <div id="dialog-buttons-container">
                <span class="dialog-button" id="checkCanStartLearning">Comenzar</span>
                <span class="dialog-button" id="finishDialog">Más tarde</span>
            </div>
        `;

        //Añadimos eventos a los botones del diálogo.
        document.getElementById('checkCanStartLearning').addEventListener('click', () => this.checkCanStartLearning(actioner));
        document.getElementById('finishDialog').addEventListener('click', () => this.finishDialog());
    }

    /**
     * Función que comprueba si el usuario puede iniciar el proceso de aprendizaje de habilidad.
     * @param actioner Entidad que inicia el proceso de aprendizaje.
     * @author Luis Antonio Expósito Sánchez
     */
    checkCanStartLearning(actioner) {
        //Comprobamos si el usuario tiene los recursos necesarios para iniciar el aprendizaje.
        if(config.player.inventory.wood >= actioner.woodCost && config.player.inventory.stone >= actioner.stoneCost) {
            //Quitamos los recursos del inventario del personaje.
            config.player.inventory.wood -= actioner.woodCost;
            config.player.inventory.stone -= actioner.stoneCost;

            //Actualizamos la interfaz de recursos.
            config.uiManager.setResources();

            //Cerramos la interfaz de diálogo.
            this.finishDialog();

            //Iniciamos el proceso de aprendizaje.
            actioner.teach();
        }
        //Entendemos que no tiene suficientes recursos.
        else {
            this.dialog.innerHTML = `¡Nos falta material! Vuelve cuando lo hayas conseguido.`
        }
    }

    /**
     * Función que setea el diálogo que se muestra cuando un aprendizaje de habilidad ha sido un éxito.
     * @param actioner Entidad que inicia el proceso de aprendizaje.
     * @author Luis Antonio Expósito Sánchez
     */
    setLearningSucceededDialog(actioner) {
        //Declaramos las variables a usar.
        let habilities = {
            'leñador': config.player.habilities.chop,
            'minero': config.player.habilities.mine
        }; //Almacena la lista de habilidades.

        //Generamos el diálogo .
        this.dialog.innerHTML = `
            <p>¡Fantástico! Has mejorado tu habilidad de ${ actioner.name } al nivel ${ habilities[actioner.name] }.
               Vuelve más adelante si quieres seguir mejorando. ¡Hasta pronto!
            </p>
        `;

        //Mostramos la interfaz de diálogo.
        this.dialogContainer.style.display = 'flex';
    }

    /**
     * Función que setea el diálogo que se muestra cuando un aprendizaje de habilidad ha sido un fracaso.
     * @author Luis Antonio Expósito Sánchez
     */
    setLearningFailedDialog() {
        //Generamos el diálogo.
        this.dialog.innerHTML = `
            <p>¡Oooh, has fallado! Sigue mejorando y vuelve más adelante para volver a intentarlo. ¡Hasta pronto!</p>
        `;

        //Mostramos la interfaz de diálogo.
        this.dialogContainer.style.display = 'flex';
    }

    /**
     * Función que muestra un mensaje de "Enhorabuena" cuando se acierta una pregunta.
     * @author Luis Antonio Expósito Sánchez
     */
    setQuestionSuccessDialog() {
        console.log("✅ Mostrando mensaje de 'Enhorabuena'");
        // Generamos el diálogo.
        this.dialog.innerHTML = `
            <p>¡Enhorabuena! Has respondido correctamente a la pregunta. ¡Sigue así!</p>
        `;

        // Mostramos la interfaz de diálogo.
        this.dialogContainer.style.display = 'flex';
    }
}