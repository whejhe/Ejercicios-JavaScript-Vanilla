//Declaramos las dependencias a usar.
import { Player } from "./entities/player.js";
import { Map } from "./entities/map.js";
import { ControlsManager } from "./managers/controlsManager.js";
import { UiManager } from "./managers/uiManager.js";
import { QuestionUiManager } from "./managers/questionUiManager.js";
import { DialogUiManager } from "./managers/dialogUiManager.js";
import { VirtualControllerManager } from "./managers/virtualControllerManager.js";

/**
 * Este archivo define la configuración del juego.
 * @author Luis Antonio Expósito Sánchez
 */
export const config = {
  baseQuestions: 5, //Almacena la cantidad base de preguntas que se realizan en los procesos de aprendizaje.
  questionProbability: 10, //Almacena la probabilidad de que se realice una pregunta al interactuar con un objeto.
  player: new Player(200, 320), //Almacena los datos del jugador.
  map: new Map("tutorial"), //Almacena el mapa que se está jugando.
  controlsManager: new ControlsManager(), //Almacena los controles del juego.
  uiManager: null, //Almacena el gestor de la interfaz de juego.
  tutorialUiManager: null, //Almacena el gestor de la interfaz de tutoriales.
  virtualControllerManager: null, // Agrega virtualControllerManager
  questionUiManager: new QuestionUiManager(), //Almacena el gestor de la interfaz de preguntas.
  dialogUiManager: new DialogUiManager(), //Almacena el gestor de la interfaz de diálogos.
  canvas: document.getElementById("gameCanvas"), //Almacena el canvas.
  ctx: null, //Almacena el contexto del canvas donde pintar el juego.
  tileSize: 32, //Almacena el tamaño base de las celdas del mapa.
  baseSpeed: 1, //Almacena la velocidad base de movimiento.
  music: new Audio("./audios/backgroundMusic.mp4"), //Almacena la música de fondo.
  mineAudio: new Audio('./audios/miner_audio.mp4'), //Almacena el audio para la acción de minar.
  chopAudio: new Audio('./audios/woodman_audio.mp4'), //Almacena el audio para la acción de talar.
};

// Asignamos el contexto y el manager de controles una vez que el objeto `config` ya está definido
config.ctx = config.canvas.getContext("2d");
config.uiManager = new UiManager(config.player);

// Establecemos volúmenes por defecto al cargar
config.music.loop = true;
config.music.volume = 0.5;

config.chopAudio.volume = 0.5;
config.mineAudio.volume = 0.5;