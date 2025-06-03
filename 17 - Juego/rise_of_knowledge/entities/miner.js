//Declaramos las dependencias a usar.
import { config } from "../config.js";

/**
 * Esta clase define la entidad para un minero.
 * @author Luis Antonio Expósito Sánchez
 */
export class Miner {
    //Declaramos las propiedades de la clase.
    name = 'minero'; //Almacena el nombre de la entidad.
    x = 0; //Almacena la coordenada X donde está el minero.
    y = 0; //Almacena la coordenada Y donde está el minero.
    sprite = new Image(); //Almacena el sprite del minero.
    size = config.tileSize; //Almacena el tamaño del minero.
    walkSprite = new Image(); //Almacena el sprite del minero al andar.
    woodCost = 50 + (config.player.habilities.chop * 10); 
    stoneCost = 75 + (config.player.habilities.mine * 15);
    hitboxXOffset = 8;
    hitboxYOffset = 8;
    hitboxWidthOffset = 17;
    hitboxHeightOffset = 11;

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
     * @param x Posición X donde está el minero.
     * @param y Posición Y donde está el minero.
     */
    constructor(x, y) {
        //Configuramos las propiedades del minero.
        this.x = x;
        this.y = y;
        this.sprite.src = './sprites/minerStart.png';
        this.walkSprite.src = './sprites/miner_walk.png';

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
     * Función que dibuja el minero.
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
     * Función que se ejecuta cuando interactuamos con el minero.
     * @author Luis Antonio Expósito Sánchez
     */
    talk() {
        //Iniciamos la interfaz de diálogo.
        config.dialogUiManager.startLearningDialog(this);
    }
    
    /**
     * Función que inicia el proceso de aprendizaje para aumentar la habilidad de minería.
     * @author Luis Antonio Expósito Sánchez
     */
    teach() {
        // Registramos el nivel de habilidad actual al entrar
        console.log("Entrando en teach - Habilidad de minería actual:", config.player.habilities.mine);

        // Calculamos la velocidad de minería actual al entrar
        const initialMineSpeed = config.baseHarvestTime * (1 - (config.player.habilities.mine * config.speedIncreasePerSkillLevel));
        console.log("Entrando en teach - Velocidad de minería actual:", initialMineSpeed);

        //Declaramos las variables a usar.
        let allQuestions = JSON.parse(sessionStorage.getItem('block_questions')); //Almacena la lista de preguntas del bloque.
        let questions; //Almacena las preguntas que va a realizar el minero. 

        //Obtenemos las preguntas que va a realizar el minero.
        questions = allQuestions.sort(() => Math.random() - 0.5).slice(0, config.player.habilities.mine * config.baseQuestions);

        //Iniciamos la intefaz de preguntas.
        config.questionUiManager.startQuiz(questions, this);
    }
}