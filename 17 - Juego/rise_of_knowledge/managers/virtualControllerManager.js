import { config } from "../config.js";

/**
 * Esta clase define el gestor del mando virtual.
 * @author Luis Antonio Expósito Sánchez
 */
export class VirtualControllerManager {
  constructor() {
    this.initializeVirtualController();
  }

  async initializeVirtualController() {
    //Declaramos las variables a usar
    const isDevForceMobile = false; // Almacena el valor de si se fuerza el uso del mando virtual en modo escritorio.

    // Almacena el valor de si el dispositivo es táctil o no.
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches ||
      isDevForceMobile;

    if (!isTouchDevice) {
      console.log(
        "El dispositivo no es táctil. No se mostrará el mando virtual."
      );
      return;
    }

    this.createVirtualControllerUI();

    const controller = document.getElementById("virtual-controller"); // Almacena el elemento del mando virtual.
    const buttons = document.querySelectorAll("#virtual-controller .button"); // Almacena los botones del mando virtual.
    // Comprobamos si existen botones.
    if (!controller || buttons.length === 0) return;

    /**
     * Función que simula un evento de teclado.
     * @author Luis Antonio Expósito Sánchez
     */
    function simulateKeyEvent(key, code, type) {
      let event = new KeyboardEvent(type, {
        key: key,
        code: code,
        bubbles: true,
        cancelable: true,
        composed: true,
      });
      document.dispatchEvent(event);
    }

    //Comprobamos si existen botones.
    if (buttons.length === 0) return; // Si no hay botones, no hacemos nada

    buttons.forEach((button) => {
      // Eventos táctiles
      button.addEventListener("touchstart", (event) => {
        event.preventDefault();
        if (button.dataset.direction) {
          simulateKeyEvent(
            button.dataset.direction,
            button.dataset.direction,
            "keydown"
          );
        } else if (button.dataset.action === "space") {
          simulateKeyEvent(" ", "Space", "keydown");
        }
      });

      button.addEventListener("touchend", (event) => {
        event.preventDefault();
        if (button.dataset.direction) {
          simulateKeyEvent(
            button.dataset.direction,
            button.dataset.direction,
            "keyup"
          );
        } else if (button.dataset.action === "space") {
          simulateKeyEvent(" ", "Space", "keyup");
        }
      });

      button.addEventListener("mousedown", (event) => {
        event.preventDefault();
        if (button.dataset.direction) {
          simulateKeyEvent(
            button.dataset.direction,
            button.dataset.direction,
            "keydown"
          );
        } else if (button.dataset.action === "space") {
          simulateKeyEvent(" ", "Space", "keydown");
        }
      });

      button.addEventListener("mouseup", (event) => {
        event.preventDefault();
        if (button.dataset.direction) {
          simulateKeyEvent(
            button.dataset.direction,
            button.dataset.direction,
            "keyup"
          );
        } else if (button.dataset.action === "space") {
          simulateKeyEvent(" ", "Space", "keyup");
        }
      });
    });
  }

  /**
   * Función que crea la interfaz del mando virtual.
   * @author Luis Antonio Expósito Sánchez
   */
  createVirtualControllerUI() {
    const controller = document.createElement("div");
    controller.id = "virtual-controller";

    controller.innerHTML = `
    <div id="virtual-controller">
  <div class="container-controllers">
    
    <div class="directions-controllers">
      <div></div>
      <div class="button up" data-direction="ArrowUp">
        <img src="./sprites/controllers/arrow-up.png" alt="Up" />
      </div>
      <div></div>

      <div class="button left" data-direction="ArrowLeft">
        <img src="./sprites/controllers/arrow-left.png" alt="Left" />
      </div>
      <div class="spacer"></div>
      <div class="button right" data-direction="ArrowRight">
        <img src="./sprites/controllers/arrow-right.png" alt="Right" />
      </div>

      <div></div>
      <div class="button down" data-direction="ArrowDown">
        <img src="./sprites/controllers/arrow-down.png" alt="Down" />
      </div>
      <div></div>
    </div>

    <div class="actions-controllers">
      <div class="button action" data-action="space">
        <img src="./sprites/controllers/interact.png" alt="Space" />
      </div>
    </div>

  </div>
</div>
        `;

    document.body.appendChild(controller);
  }
}
