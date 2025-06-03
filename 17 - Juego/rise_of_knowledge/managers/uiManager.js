//Declaramos las dependencias a usar.
import { config } from "../config.js";

/**
 * Esta clase define la interfaz del juego.
 * @author Luis Antonio Expósito Sánchez
 */
export class UiManager {
    //Declaramos las propiedades de la clase.
    player; //Almacena la información del jugador.
    woodResource = document.getElementById('woodValue'); //Almacena el elemento de la UI que muestra la cantidad de madera recolectada.
    stoneResource = document.getElementById('stoneValue'); //Almacena el elemento de la UI que muestra la cantidad de piedra recolectada.

    /**
     * Constructor de la clase.
     * @param player Datos del jugador.
     */
    constructor(player) {
        //Configuramos las propiedades del controlador.
        this.player = player;

        //Inicializamos los listeners.
        this.initializeUIListeners();

        // Detectamos el cambio de pantalla completa.
        document.addEventListener('fullscreenchange', () => {
            //Declaramos las variables a usar.
            let wrapper = document.getElementById('game-wrapper'); //Almacena el contenedor del juego completo.
            // Comprobamos si el contenedor está en pantalla completa.
            if (document.fullscreenElement === wrapper) {
                // Si está en pantalla completa, ajustamos el tamaño del canvas.
                config.canvas.style.width = "100%";
                config.canvas.style.height = "100vh";
            } else {
                // Si no está en pantalla completa, restauramos el tamaño original del canvas.
                config.canvas.style.width = "";
                config.canvas.style.height = "";
            }
        });

        if (config.music) {
            config.music.volume = config.music.volume ?? 0.5;
            config.music.muted = config.music.volume === 0;
        }

        if (config.chopAudio) {
            config.chopAudio.volume = config.chopAudio.volume ?? 0.5;
            config.chopAudio.muted = config.chopAudio.volume === 0;
        }

        if (config.mineAudio) {
            config.mineAudio.volume = config.mineAudio.volume ?? 0.5;
            config.mineAudio.muted = config.mineAudio.volume === 0;
        }

    }

    /**
     * Función setea los recursos que ha recolectado el jugador en la UI.
     * @author Luis Antonio Expósito Sánchez
     */
    setResources() {
        //Seteamos el valor de los recursos en la UI.
        this.stoneResource.innerText = this.player.inventory.stone;
        this.woodResource.innerText = this.player.inventory.wood;
    }

    /**
     * Función que inicializa los listener necesarios de la UI.
     * @author Luis Antonio Expósito Sánchez
     */
    initializeUIListeners() {
        const fullScreenButton = document.getElementById('fullScreenButton');
        const mapaMundiButton = document.getElementById('mapaMundi');
        const soundSettings = document.getElementById('soundSettings');
        const volumeDropdown = document.getElementById('volumeDropdown');
        const musicSlider = document.getElementById('musicVolumeSlider');
        const effectsSlider = document.getElementById('effectsVolumeSlider');

        fullScreenButton.addEventListener('click', () => this.toogleFullScreen());
        mapaMundiButton.addEventListener('click', () => this.loadMapScreen());

        if (musicSlider && config.music) {
            config.music.volume = 0.5;
            musicSlider.value = config.music.volume;
            console.log("MUSIC - Set value:", musicSlider.value);
        }

        if (effectsSlider && config.chopAudio) {
            config.chopAudio.volume = 0.5;
            config.mineAudio.volume = 0.5;
            effectsSlider.value = config.chopAudio.volume;
            console.log("EFFECTS - Set value:", effectsSlider.value);
        }

        soundSettings.addEventListener('click', (e) => {
            e.stopPropagation();
            volumeDropdown.style.display = volumeDropdown.style.display === 'none' ? 'block' : 'none';
        });

        document.addEventListener('click', () => {
            volumeDropdown.style.display = 'none';
        });

        musicSlider.addEventListener('input', (e) => {
            if (config.music) {
                config.music.volume = parseFloat(e.target.value);
                config.music.muted = config.music.volume === 0;
            }
        });

        effectsSlider.addEventListener('input', (e) => {
            const value = parseFloat(e.target.value);
            if (config.chopAudio) {
                config.chopAudio.volume = value;
                config.chopAudio.muted = value === 0;
            }
            if (config.mineAudio) {
                config.mineAudio.volume = value;
                config.mineAudio.muted = value === 0;
            }
        });
    }


    /**
     * Función que pone/quita el modo pantalla completa.
     * @author Luis Antonio Expósito Sánchez
     */
    toogleFullScreen() {
        //Declaramos las variables a usar.
        let wrapper = document.getElementById('game-wrapper'); //Almacena el contenedor del juego completo.
        if (!document.fullscreenElement) {
            wrapper.requestFullscreen().catch(err => {
                console.error(`Error al intentar activar pantalla completa: ${err.message}`);
            });
        } else {
            document.exitFullscreen()
        }
    }

    /**
     * Función que carga el archivo mapaMundi.js.
     * @author Luis Antonio Expósito Sánchez
     */
    loadMapScreen() {
        import('./mapaMundi.js')
            .then(module => {
                module.initializeMapScreen(); // Llamamos a la función de inicialización del mapa mundi.
            })
            .catch(err => {
                console.error(`Error al cargar el mapa mundi: ${err.message}`);
            });
    }

    /**
     * Función que activa/desactiva el sonido del juego.
     * @author Luis Antonio Expósito Sánchez
     */
    setMute() {
        //Declaramos las variables a usar.
        let muteButton = document.getElementById('muteButton'); // Botón para silenciar la música.

        if (config.music) {
            config.music.muted = !config.music.muted; // Cambia el estado de muteo de la música.

            muteButton.innerHTML = !config.music.muted
                ? '<img src="./sprites/ui/sound.png" alt="Con sonido" width="24" height="24">'
                : '<img src="./sprites/ui/mute.png" alt="Silenciado" width="24" height="24">';
        }
    }

    /**
     * Función que activa/desactiva el sonido de los efectos del juego.
     * @author Luis Antonio Expósito Sánchez
     */
    setMuteEffects() {
        //Declaramos las variables a usar.
        let muteEffectsButton = document.getElementById('muteEffects'); // Botón para silenciar los efectos de sonido.

        if (config.chopAudio && config.mineAudio) {
            config.chopAudio.muted = !config.chopAudio.muted; // Cambia el estado de muteo de los efectos al talar.
            config.mineAudio.muted = !config.mineAudio.muted; // Cambia el estado de muteo de los efectos al minar.

            muteEffectsButton.innerHTML = !config.chopAudio.muted
                ? '<img src="./sprites/ui/sound.png" alt="Con sonido" width="24" height="24">'
                : '<img src="./sprites/ui/mute.png" alt="Silenciado" width="24" height="24">';
        }
    }
}