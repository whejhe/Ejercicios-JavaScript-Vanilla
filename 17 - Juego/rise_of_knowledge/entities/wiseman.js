//Declaramos las dependencias a usar.
import { config } from "../config.js";

/**
 * Esta clase define la entidad para un sabio.
 * @author Luis Antonio Expósito Sánchez
 */
export class WiseMan {
    //Declaramos las propiedades de la clase.
    name = 'sabio'; //Almacena el nombre de la entidad.
    x = 0; //Almacena la coordenada X donde está el sabio.
    y = 0; //Almacena la coordenada Y donde está el sabio.
    sprite = new Image(); //Almacena el sprite del sabio.
    size = config.tileSize; //Almacena el tamaño de sabio.
    walkSprite = new Image();
    woodCost = 50 + (config.player.habilities.chop * 10); //Almacena el coste de madera que tiene entrenar con el leñador.
    stoneCost = 75 + (config.player.habilities.mine * 15); //Almacena el coste de piedra que tiene entrenar con el leñador.
    hitboxXOffset = 12;
    hitboxYOffset = 7;
    hitboxWidthOffset = 24;
    hitboxHeightOffset = 14;

    direction = 'down';
    movementCooldown = 3000;
    lastDirectionChange = Date.now();
    isMoving = false;
    isCollidingWithPlayer = false;

    currentFrame = 0;
    frameTime = 200;
    lastFrameTime = Date.now();

    /**
     * Constructor de la clase.
     * @param x Posición X donde está el sabio.
     * @param y Posición Y donde está el sabio.
     */
    constructor(x, y) {
        //Configuramos las propiedades del sabio.
        this.x = x;
        this.y = y;
        this.sprite.src = './sprites/wise_man.png'; 
        this.walkSprite.src = './sprites/wise_man_walk.png';

        // Definimos el hitbox más preciso
        this.hitboxX = this.x + this.hitboxXOffset; // Ajuste del hitbox en X
        this.hitboxY = this.y + this.hitboxYOffset; // Ajuste del hitbox en Y
        this.hitboxWidth = this.size - this.hitboxWidthOffset; // Ancho del hitbox
        this.hitboxHeight = this.size - this.hitboxHeightOffset; // Alto del hitbox
    }

    updateHitbox() {
        this.hitboxX = this.x + this.hitboxXOffset;
        this.hitboxY = this.y + this.hitboxYOffset;
    }

    update(player, tutorialFinished) {
        if (!tutorialFinished) return;

        this.checkPlayerCollision(player);

        if (this.isCollidingWithPlayer) {
            this.isMoving = false;
            return;
        }

        if (Date.now() - this.lastDirectionChange > this.movementCooldown) {
            this.chooseRandomDirection();
            this.lastDirectionChange = Date.now();
        }

        if (this.isMoving) this.move();
    }

    chooseRandomDirection() {
        const dirs = ['up', 'down', 'left', 'right'];
        this.direction = dirs[Math.floor(Math.random() * dirs.length)];
        this.isMoving = true;
    }

    move() {
        const speed = 0.5;
        let dx = 0, dy = 0;

        switch (this.direction) {
            case 'up': dy = -speed; break;
            case 'down': dy = speed; break;
            case 'left': dx = -speed; break;
            case 'right': dx = speed; break;
        }

        const newX = this.x + dx;
        const newY = this.y + dy;

        const collision = config.map.getCollisionableEntities().some(entity => {
            if (entity === this || entity.passable) return false;

            const hitboxX = entity.hitboxX ?? entity.x;
            const hitboxY = entity.hitboxY ?? entity.y;
            const hitboxWidth = entity.hitboxWidth ?? entity.size;
            const hitboxHeight = entity.hitboxHeight ?? entity.size;

            return newX < hitboxX + hitboxWidth &&
                   newX + this.size > hitboxX &&
                   newY < hitboxY + hitboxHeight &&
                   newY + this.size > hitboxY;
        });

        if (collision) {
            this.chooseRandomDirection();
        } else {
            this.x = newX;
            this.y = newY;
            this.updateHitbox(); // Actualiza la hitbox después de moverse
        }
    }

    checkPlayerCollision(player) {
        const isColliding = this.x < player.x + config.tileSize &&
                            this.x + this.size > player.x &&
                            this.y < player.y + config.tileSize &&
                            this.y + this.size > player.y;

        if (isColliding) {
            this.isCollidingWithPlayer = true;
        } else {
            if (this.isCollidingWithPlayer) {
                this.isMoving = true;
                this.chooseRandomDirection();
            }
            this.isCollidingWithPlayer = false;
        }
    }

    /**
     * Función que dibuja el sabio.
     * @author Luis Antonio Expósito Sánchez
     */
    draw() {
        const ctx = config.ctx;
        if (this.isMoving) {
            const now = Date.now();
            if (now - this.lastFrameTime > this.frameTime) {
                this.currentFrame = (this.currentFrame + 1) % 6;
                this.lastFrameTime = now;
            }
            const spriteX = this.currentFrame * this.size;
            const spriteY = {
                'down': 0,
                'up': this.size,
                'right': this.size * 2,
                'left': this.size * 3
            }[this.direction];

            ctx.drawImage(
                this.walkSprite,
                spriteX, spriteY,
                this.size, this.size,
                this.x, this.y,
                this.size, this.size
            );
        } else {
            ctx.drawImage(this.sprite, this.x, this.y, this.size, this.size);
        }
    }

    /**
     * Función que se ejecuta cuando interactuamos con el sabio.
     * @author Luis Antonio Expósito Sánchez
     */
    talk() {
        //Iniciamos la interfaz de diálogo.
        config.dialogUiManager.startLearningDialog(this);
    }
    
    /**
     * Función que inicia el proceso de aprendizaje para aumentar la habilidad de cortar madera.
     * @author Luis Antonio Expósito Sánchez
     */
    teach() {
        // Registramos el nivel de habilidad actual al entrar
        console.log("Entrando en teach - Habilidad de minería actual:", config.player.habilities.mine);

        //Declaramos las variables a usar.
        let allQuestions = JSON.parse(sessionStorage.getItem('block_questions')); //Almacena la lista de preguntas del bloque.
 
        //Iniciamos la intefaz de preguntas.
        config.questionUiManager.startFinalQuiz(allQuestions, this);

        //Almacenamos las notas.
        sessionStorage.setItem(
          "block_grades",
          JSON.stringify({
            right: this.questions.length - this.wrongAnswers,
            failed: this.wrongAnswers,
          })
        );

        // Get correct answers from localStorage
        const correctAnswers = JSON.parse(localStorage.getItem('correctAnswers')) || [];

        // Reveal correct answers in wikiModal (assuming you'll create a revealQuestion function)
        correctAnswers.forEach(answer => {
            const questionIndex = allQuestions.findIndex(q => q.question === answer.question);
            if (questionIndex !== -1) {
                revealQuestion(questionIndex); // Call the revealQuestion function
            }
        });

        //Finalizamos el juego.
        finishCourse();
        //Redirigimos el usuario a la pantalla de resúmen.
        window.top.location = appBaseUrl + "dashboard/game_resume.html";
    }
}
