//Declaramos las dependencias a usar.
import { config } from "../config.js";
import { Tree } from "./tree.js";
import { Rock } from "./rock.js";
import { WoodCutter } from './woodcutter.js';
import { WiseMan } from "./wiseman.js";
import { Bush } from "./bush.js";

/**
 * Esta clase define la entidad para un jugador.
 * @author Luis Antonio Expósito Sánchez
 */
export class Player {
    //Declaramos las propiedades de la clase.
    x = 0; //Almacena la coordenada X donde está el jugador.
    y = 0; //Almacena la coordenada Y donde está el jugador.
    moveAction = null; //Almacena el tipo de movimiento que está llevando a cabo el jugador.
    currentFrame = 0; //Almacena el frame del sprite actual.
    totalFrames = 6; //Almacena la cantidad total de frames que tiene el sprite para una animación concreta.
    frameTime = 200; //Almacena el tiempo en ms que tardamos en cambiar de frame.
    lastTime = Date.now(); //Almacena la última vez que cambiamos de frame.
    moveActionSpriteSheet = new Image(); //Almacena la hoja de sprite para la animación de movimiento del jugador.
    sprite = new Image(); //Almacena el sprite base del jugador.
    inventory = { wood: 100, stone: 100}; //Almacena los objetos en el inventario del jugador.
    habilities = { chop: 1, mine: 1}; //Almacena el nivel de las habilidades del jugador.
    moveActionSpriteMine = new Image(); //Almacena la hoja de sprite para la animación de movimiento del jugador al minar.
    isMining = false; //Almacena true si el jugador está minando, false en caso contrario.
    miningUntil = 0; //Almacena el tiempo que queda para terminar de minar.
    moveActionSpriteChop = new Image(); //Almacena la hoja de sprite para la animación de movimiento del jugador al talar.
    isChoping = false; //Almacena true si el jugador está talando, false en caso contrario.
    chopingUntil = 0; //Almacena el tiempo que queda para terminar de talar.

    /**
     * Constructor de la clase.
     * @param x Posición X donde está el jugador.
     * @param y Posición Y donde está el jugador.
     */
    constructor(x, y) {
        //Configuramos las propiedades del jugador.
        this.x = x;
        this.y = y;
        this.canMove = true; // Inicializamos canMove como true
        this.isPlayer=true; // Indicamos que esta entidad es un jugador
        this.sprite.src = './sprites/player/player.png';
        this.moveActionSpriteSheet.src = './sprites/player/player_walk.png';
        this.moveActionSpriteChop.src = './sprites/player/player_chop.png';
        this.moveActionSpriteMine.src = './sprites/player/player_mine.png';
    }

    /**
     * Función que dibuja el jugador.
     * @author Luis Antonio Expósito Sánchez
     */
    draw() {
        const now = Date.now();
        
        // Cancelar animaciones terminadas
        if (this.isChoping && now > this.chopingUntil) {
            this.isChoping = false;
            this.moveAction = null;
        }
        if (this.isMining && now > this.miningUntil) {
            this.isMining = false;
            this.moveAction = null;
        }
        
        // Dibujar animación correspondiente
        if (this.moveAction && (this.lastX !== this.x || this.lastY !== this.y)) {
            this.runAnimation("walk");
        } else if (this.isChoping) {
            this.runAnimation("chop");
        } else if (this.isMining) {
            this.runAnimation("mine");
        } else {
            // Dibujar el sprite base si no hay acción activa
            config.ctx.drawImage(this.sprite, this.x, this.y, config.tileSize, config.tileSize);
        }

        // Actualizar las últimas coordenadas del jugador
        this.lastX = this.x;
        this.lastY = this.y;
    }
    
    /**
     * Función que mueve hacia arriba el jugador.
     * @author Luis Antonio Expósito Sánchez
     */
    moveUp(entities) {
        if (this.canMove) { // Verificamos si el jugador puede moverse
            //Actualizamos el tipo de movimiento del jugador.
            this.moveAction = "up";

            //Movemos el jugador.
            this.move(0, -config.baseSpeed, entities);

            //Actualizamos el tiempo de la última acción del jugador.
            this.lastMoveTime = Date.now();
        }
    }

    /**
     * Función que mueve hacia abajo el jugador.
     * @author Luis Antonio Expósito Sánchez
     */
    moveDown(entities) {
        if (this.canMove) { // Verificamos si el jugador puede moverse
            //Actualizamos el tipo de movimiento del jugador.
            this.moveAction = "down";

            //Movemos el jugador.
            this.move(0, config.baseSpeed, entities);

            //Actualizamos el tiempo de la última acción del jugador.
            this.lastMoveTime = Date.now();
        }
    }

    /**
     * Función que mueve hacia la izquierda el jugador.
     * @author Luis Antonio Expósito Sánchez
     */
     moveLeft(entities) {
        if (this.canMove) { // Verificamos si el jugador puede moverse
            //Actualizamos el tipo de movimiento del jugador.
            this.moveAction = "left";

            //Movemos el jugador.
            this.move(-config.baseSpeed, 0, entities);

            //Actualizamos el tiempo de la última acción del jugador.
            this.lastMoveTime = Date.now();
        }
    }

    /**
     * Función que mueve hacia la derecha el jugador.
     * @author Luis Antonio Expósito Sánchez
     */
    moveRight(entities) {
        if (this.canMove) { // Verificamos si el jugador puede moverse
            //Actualizamos el tipo de movimiento del jugador.
            this.moveAction = "right";

            //Movemos el jugador.
            this.move(config.baseSpeed, 0, entities);

            //Actualizamos el tiempo de la última acción del jugador.
            this.lastMoveTime = Date.now();
        }
    }

    /**
     * Función que mueve el jugador a la posición indicada.
     * @param dx Coordenada X donde mover el jugador.
     * @param dy Coordenada Y donde mover el jugador.
     * @param entities Lista de entidades en el mapa.
     * @author Luis Antonio Expósito Sánchez
     */
    move(dx, dy, entities) {
        if (this.canMove) { // Verificamos si el jugador puede moverse
            //Declaramos las variables a usar.
            let isColliding = false; //Almacena true si el jugador está colisionando con una entidad, false en caso contrario.
            let newX = this.x + dx; //Almacena la nueva coordenada X del jugador.
            let newY = this.y + dy; //Almacena la nueva coordenada Y del jugador.
            
            //Cancelamos las acciones en curso.
            this.cancelActions();
            
            //Validamos si hay colisiones con alguna entidad-.
            // isColliding = entities.some(entity => 
            //     !entity.passable && //Comprobamos que la entidad no es atravesable.
            //     newX < entity.x + entity.size && //Comprueba el borde derecho del jugador.
            //     newX + config.tileSize > entity.x && //Comprueba el borde izquierdo del jugador.
            //     newY < entity.y + entity.size && //Comprueba el borde inferior del jugador.
            //     newY + config.tileSize > entity.y    //Comprueba el borde superior del jugador.
            // );

            //Validamos si hay colisiones con alguna entidad-.
            isColliding = entities.some(entity => {
                if (entity.passable) return false;

                const hitboxX = entity.hitboxX !== undefined ? entity.hitboxX : entity.x;
                const hitboxY = entity.hitboxY !== undefined ? entity.hitboxY : entity.y;
                const hitboxWidth = entity.hitboxWidth !== undefined ? entity.hitboxWidth : entity.size;
                const hitboxHeight = entity.hitboxHeight !== undefined ? entity.hitboxHeight : entity.size;

                return (
                    newX < hitboxX + hitboxWidth &&
                    newX + config.tileSize > hitboxX &&
                    newY < hitboxY + hitboxHeight &&
                    newY + config.tileSize > hitboxY
                );
            });

            //Comprobamos si no hay colisión.
            if (!isColliding) {
                //Actualizamos la posición del jugador.
                this.x = newX;
                this.y = newY;
            }
        }
    }

    /**
     * Función que hace interactuar el jugador con la entidad que tiene cerca.
     * @param interactiveEntities Lista de entidades con las que se puede interactuar.
     * @author Luis Antonio Expósito Sánchez 
     */
    interact(interactiveEntities) {
        //Declaramos las variables a usar.
        let isColliding = false; //Almacena true si el jugador está colisionando con una entidad, false en caso contrario.
        let interacted; //Almacena true si se ha interactuado con la entidad, false en caso contrario.

        //Iteramos la lista de entidades con las que se pueden interactuar.
        for(let entity of interactiveEntities) {
            //Validamos si hay colisiones con alguna entidad.
            isColliding = this.x <= entity.x + entity.size && //Comprueba el borde derecho del jugador.
                this.x + config.tileSize >= entity.x && //Comprueba el borde izquierdo del jugador.
                this.y <= entity.y + entity.size && //Comprueba el borde inferior del jugador.
                this.y + config.tileSize >= entity.y; //Comprueba el borde superior del jugador.

            //Comprobamos si está colisionando.
            if(isColliding) {
                //Comprobamos si el tipo de entidad es de recurso.
                if (entity instanceof Tree) {
                    // Comprobamos que el jugador no está talando y el arbol tiene recursos.
                    if (entity.resources > 0 && !this.isChoping) {
                        this.isChoping = true;
                        this.chopingUntil = Date.now() + 1000;
                
                        // Calculamos la dirección hacia la roca
                        const dx = entity.x - this.x;
                        const dy = entity.y - this.y;
                
                        // Determina la dirección de la animación
                        this.moveAction = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up");

                        // Reproducimos el sonido cuando comienza a talar.
                        config.chopAudio.play();
                    }
                
                    if (entity.resources > 0) {
                        interacted = entity.harvest();
                    }
                }

                if (entity instanceof Rock) {
                    // Comprobamos que el jugador no está minando y la roca tiene recursos.
                    if (entity.resources > 0 && !this.isMining) {
                        this.isMining = true;
                        this.miningUntil = Date.now() + 1000;
                
                        // Calculamos la dirección hacia la roca
                        const dx = entity.hitboxX - this.x;
                        const dy = entity.hitboxY - this.y;
                
                        // Determina la dirección de la animación
                        this.moveAction = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up");

                        // Reproducimos el sonido cuando comienza a minar.
                        config.mineAudio.play();
                    }
                
                    if (entity.resources > 0) {
                        interacted = entity.harvest();
                    }
                }
                
                //Comprobamos si el tipo de entidad es de recurso.
                if (entity instanceof Bush) {
                    // Comprobamos que el jugador no está talando y el arbol tiene recursos.
                    if (entity.resources > 0 && !this.isChoping) {
                        this.isChoping = true;
                        this.chopingUntil = Date.now() + 1000;
                
                        // Calculamos la dirección hacia la roca
                        const dx = entity.x - this.x;
                        const dy = entity.y - this.y;
                
                        // Determina la dirección de la animación
                        this.moveAction = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? "right" : "left") : (dy > 0 ? "down" : "up");
                    }
                
                    if (entity.resources > 0) {
                        interacted = entity.harvest();
                    }
                }

                //Comprobamos si el tipo de entidad es de aprendizaje.
                if(entity instanceof WoodCutter || entity instanceof WiseMan) {
                    //Hablamos con el profesor.
                    interacted = entity.talk();
                }

                //Comprobamos si la interacción ha sido satisfactoria.
                if(interacted) {
                    //Actualizamos la interfaz del juego.
                    config.uiManager.setResources();

                    //Interrumpimos el bucle.
                    break;
                }
            }
        };
    }

    /**
     * Función que ejecuta la animación correspondiente según el tipo de acción.
     * @param {string} animationType - Tipo de animación a ejecutar ("walk", "chop", "mine").
     * @author Luis Antonio Expósito Sánchez
     */
    runAnimation(animationType) {
        // Declaramos las variables a usar.
        let spriteX; // Almacena la coordenada X del sprite a dibujar.
        let spriteY = {
            "down": 0,
            "up": 32,
            "right": 64,
            "left": 96
        }; // Almacena la coordenada Y del sprite a dibujar.

        // Comprobamos si ha pasado el tiempo para cambiar de frame.
        if(Date.now() - this.lastTime >= this.frameTime) {
            switch(animationType) {
                case "walk":
                    // Cambiamos de frame.
                    this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
                    spriteX = this.currentFrame * config.tileSize;
                    break;
                case "chop":
                    // Cambiamos de frame.
                    this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
                    spriteX = this.currentFrame * config.tileSize;
                    break;
                case "mine":
                    // Cambiamos de frame.
                    this.currentFrame = (this.currentFrame + 1) % this.totalFrames;
                    spriteX = this.currentFrame * config.tileSize;
                    break;
                default:
                    break;
            }
            this.lastTime = Date.now();
        }

        // Calculamos la posición del frame en el sprite sheet.
        spriteX = this.currentFrame * config.tileSize;
        spriteY = spriteY[this.moveAction];

        // Dibujamos la animación correspondiente
        switch(animationType) {
            case "walk":
                config.ctx.drawImage(
                    this.moveActionSpriteSheet, 
                    spriteX, spriteY, 
                    config.tileSize, config.tileSize, 
                    this.x, this.y, 
                    config.tileSize, config.tileSize
                );
                break;
            case "chop":
                config.ctx.drawImage(
                    this.moveActionSpriteChop, 
                    spriteX, spriteY, 
                    config.tileSize, config.tileSize, 
                    this.x, this.y, 
                    config.tileSize, config.tileSize
                );
                break;
            case "mine":
                config.ctx.drawImage(
                    this.moveActionSpriteMine, 
                    spriteX, spriteY, 
                    config.tileSize, config.tileSize, 
                    this.x, this.y, 
                    config.tileSize, config.tileSize
                );
                break;
        }
    }

    /**
     * Función que cancela las acciones que esté llevando a cabo el usuario cuando éste se mueva.
     * @author Luis Antonio Expósito Sánchez
     */
    cancelActions() {
        //Cancelamos los diálogos.
        config.dialogUiManager.finishDialog();
    }
}