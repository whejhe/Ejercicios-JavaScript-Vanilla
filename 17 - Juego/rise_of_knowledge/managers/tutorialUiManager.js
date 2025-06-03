import { config } from "../config.js";

export class TutorialUiManager {
  constructor() {
    this.currentModal = 1;
    this.totalModals = 3;
    this.finished = false;
  }

  startTutorial() {
    if (config.map.mapName === "tutorial") {
      config.player.canMove = false; // Deshabilita el movimiento del jugador al iniciar el tutorial
      // setTimeout(() => {
      // }, 2000);
      this.showModal(this.currentModal);
      document
        .getElementById("nextModal1")
        .addEventListener("click", () => this.nextModal());
      document
        .getElementById("nextModal2")
        .addEventListener("click", () => this.nextModal());
      document
        .getElementById("closeTutorial")
        .addEventListener("click", () => this.closeTutorial());
    } else {
      this.finished = true;
    }
  }

  showModal(modalNumber) {
    document.getElementById(`tutorialModal${modalNumber}`).style.display =
      "flex";
  }

  nextModal() {
    document.getElementById(`tutorialModal${this.currentModal}`).style.display =
      "none";
    this.currentModal++;
    if (this.currentModal <= this.totalModals) {
      this.showModal(this.currentModal);
    }
  }

  closeTutorial() {
    document.getElementById(`tutorialModal${this.currentModal}`).style.display =
      "none";
    this.finished = true;
    config.player.canMove = true; // Permite el movimiento del jugador al cerrar el tutorial
  }
}
