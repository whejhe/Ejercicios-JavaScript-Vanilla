//Declaramos las dependencias a usar.
import { config } from "../config.js";

/**
 * Esta clase define el gestor de controles del juego.
 * @author Luis Antonio Expósito Sánchez
 */
export class ControlsManager {
    //Declaramos las propiedades de la clase.
    keysPressed = []; //Almacena la lista de teclas que están siendo pulsadas.

    /**
     * Función que inicializa los controles del juego.
     * @author Luis Antonio Expósito Sánchez
     */
    initializeGameControls() {
        //Asignamos los eventos de teclado.
        document.addEventListener('keydown', (event) => {
            //Prevenimos el comportamiento por defecto de las teclas de flecha.
            if (event.key === "ArrowUp" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowRight") {
                event.preventDefault();
            }
            if(event.key == " ") {
                config.player.interact(config.map.getInteractableEntities());
            }

            //Almacenamos la tecla que está siendo pulsada.
            this.keysPressed[event.key] = true;
        });

        document.addEventListener('keyup', (event) => {
            //Eliminamos la tecla que ha dejado de ser pulsada.
            delete this.keysPressed[event.key];
        });
    }
}