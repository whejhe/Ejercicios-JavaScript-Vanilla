//Declaramos las dependencias a usar.
import { config } from "./config.js";
import { TutorialUiManager } from "./managers/tutorialUiManager.js"; // Importa TutorialUiManager
import { VirtualControllerManager } from "./managers/virtualControllerManager.js";
import { createWikiModal } from "./managers/wikiModal.js";

function waitForUserInteraction() {
  return new Promise((resolve) => {
    //Declaramos las variables a usar
    const startButton = document.getElementById('start-button'); //Almacena el botón de la portada
    const startScreen = document.getElementById('start-screen'); //Almacena la portada
    const loadingScreen = document.getElementById('loading-screen'); //Almacena la pantalla de carga

    const unlockAudioAndStart = () => {
      // Oculta la portada
      startScreen.style.display = 'none';

      // Mostrar pantalla de carga
      loadingScreen.style.display = 'flex';

      setTimeout(() => resolve(), 2500);
    };

    startButton.addEventListener('click', unlockAudioAndStart);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  // Agregar el modal de la wiki al contenedor
  const wikiContainer = document.getElementById("wiki-container");
  wikiContainer.innerHTML = createWikiModal();

  // Obtener el wikiModal DESPUÉS de insertar el HTML
  const wikiModal = document.getElementById("wikiModal");
  console.log("wikiModal:", wikiModal);
  const wikiButton = document.getElementById("wiki");
  console.log("wikiButton:", wikiButton);
  let span = document.querySelector("#wiki-container .close");

  wikiButton.onclick = function () {
    console.log("¡Botón de la wiki pulsado!");
    console.log("Antes de actualizar el contenido del modal");
    // Actualizar el contenido del modal antes de mostrarlo
    wikiContainer.innerHTML = createWikiModal();
    console.log("Después de actualizar el contenido del modal");
    // Obtener el wikiModal DESPUÉS de insertar el HTML
    const wikiModal = document.getElementById("wikiModal");
    console.log("Antes de mostrar el modal");
    console.log("wikiModal:", wikiModal); // Añade esta línea
    wikiModal.style.display = "block";
    console.log("Después de mostrar el modal");
    span = document.querySelector("#wiki-container .close");
    span.onclick = function () {
      wikiModal.style.display = "none";
    };
  };

  span.onclick = function () {
    wikiModal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == wikiModal) {
      wikiModal.style.display = "none";
    }
  };
});

/**
 * Función que inicializa el juego.
 * @author Luis Antonio Expósito Sánchez
 */
async function startGame() {

  await waitForUserInteraction();

  config.tutorialUiManager = new TutorialUiManager(); // Inicializa TutorialUiManager
  config.virtualControllerManager = new VirtualControllerManager();

  config.music.play(); //Reproduce la música de fondo.


  //Obtenemos el contenido del mapa.
  await config.map.getMapConfig().then(() => {
    //Iniciamos los controles del juego.
    config.controlsManager.initializeGameControls();

    //Iniciamos la interfaz del juego.
    config.uiManager.setResources();

    //Ocultamos la pantalla de carga
    document.getElementById('loading-screen').style.display = 'none';

    //Iniciamos el bucle principal del juego.
    gameLoop();

    config.tutorialUiManager.startTutorial(); // Inicia el tutorial si es necesario
  });
}

/**
 * Bucle principal del juego
 */
function gameLoop() {
  let collisionableEntities = config.map.getCollisionableEntities(); //Almacena la lista de entidades con las que se puede colisionar.
  let interactableEntities = config.map.getInteractableEntities();
  const tutorialFinished = config.tutorialUiManager.finished;

  config.ctx.clearRect(0, 0, config.canvas.width, config.canvas.height);

  //Dibujamos el mapa y el jugador.
  config.map.draw();

  if (config.map.wildGrass) {
    config.map.wildGrass.forEach((grass) => {
      grass.cross(config.player); 
      config.map.teachers.forEach((teacher) => grass.cross(teacher));
      grass.draw();
    });
  }

  // if (config.map.wildGrass) {
  //   config.map.wildGrass.forEach(grass => grass.draw());
  // }

  config.player.draw();

  config.map.teachers.forEach(teacher => {
    if (teacher.update) teacher.update(config.player, tutorialFinished);
    teacher.draw();
  });


  if (config.controlsManager.keysPressed["ArrowUp"]) {
    config.player.moveUp(collisionableEntities);
  }

  if (config.controlsManager.keysPressed["ArrowDown"]) {
    config.player.moveDown(collisionableEntities);
  }

  if (config.controlsManager.keysPressed["ArrowLeft"]) {
    config.player.moveLeft(collisionableEntities);
  }

  if (config.controlsManager.keysPressed["ArrowRight"]) {
    config.player.moveRight(collisionableEntities);
  }

  requestAnimationFrame(gameLoop);
}

//Iniciamos el juego.
startGame();
