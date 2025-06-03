//Declaramos las dependencias a usar.
import { config } from "../config.js";


export class Bush {
    //Declaramos las propiedades de la clase.
    x = 0; //Almacena la coordenada X donde está el arbusto.
    y = 0; //Almacena la coordenada Y donde está el arbusto.
    sprite = new Image(); //Almacena el sprite de el arbusto.
    size = config.tileSize; //Almacena el tamaño de el arbusto.
    resources = 3; //Almacena la cantidad de madera que puede ser cosechada del arbusto.
    passable = false; //Almacena la propiedad que indica si el objeto se puede atravesar o no.
    hitboxXOffset = 13;
    hitboxYOffset = 16;
    hitboxWidthOffset = 26;
    hitboxHeightOffset = 26;
    
    /**
     * Constructor de la clase.
     * @param x Posición X donde está el arbusto.
     * @param y Posición Y donde está el arbusto.
     * @author Luis Antonio Expósito Sánchez
     */
    constructor(x, y, sprite = './sprites/resources/bush.png') {
        //Configuramos las propiedades del arbusto.
        this.x = x;
        this.y = y;
        this.sprite.src = sprite;

        // Definimos el hitbox más preciso
        this.hitboxX = this.x + this.hitboxXOffset; // Ajuste del hitbox en X
        this.hitboxY = this.y + this.hitboxYOffset; // Ajuste del hitbox en Y
        this.hitboxWidth = this.size - this.hitboxWidthOffset; // Ancho del hitbox
        this.hitboxHeight = this.size - this.hitboxHeightOffset; // Alto del hitbox
    }

    /**
     * Función que dibuja el arbusto.
     * @author Luis Antonio Expósito Sánchez
     */
    draw() {
        config.ctx.drawImage(this.sprite, this.x, this.y, this.size, this.size);
    }

    /**
     * Función que cosecha madera del arbusto.
     * @author Luis Antonio Expósito Sánchez
     */
    harvest() {
        console.log('harvest bush', this.resources)
        let harvested = false; 
        let playerHability = config.player.habilities.chop; //Almacena la habilidad de leñador del jugador.
        let playerInventory = config.player.inventory; //Almacena el inventario del jugador.

        if(this.resources > 0) {
            //Comprobamos si hay suficientes recursos para un corte completo.
            if (this.resources >= playerHability) {
                this.resources -= playerHability;
                playerInventory.wood += playerHability;
            } 
            else {
                playerInventory.wood += this.resources;
                this.resources = 0;
            }
    
            harvested = true;

            if(this.resources === 0) {
                this.resetResources();
            }
        }

        return harvested;
    }

    /**
     * Función que restablece los recursos del arbusto.
     * @author Luis Antonio Expósito Sánchez
     */
    resetResources() {
        //Cambiamos al sprite de crecimiento.
        let aux = this.sprite.src; //Almacenamos el sprite del arbusto para uso posterior.
        this.sprite.src = './sprites/resources/bush-growing.png';
        this.passable = true; //Hacemos que el arbusto sea atravesable.

        const retryReappear = () => {
            // Almacena el jugador
            const player = config.player;
    
            // Almacena la posición del jugador
            const isPlayerOnBush =
                player.x < this.x + this.size &&
                player.x + config.tileSize > this.x &&
                player.y < this.y + this.size &&
                player.y + config.tileSize > this.y;
    
            // Comprobamos si el jugador está en la posición del arbusto
            if (isPlayerOnBush) {
                // Esperamos y volvemos a intentar
                setTimeout(retryReappear, 1000); // Vuelve a intentarlo en 1 segundo
            }
            // Entendemos que el jugador no está en la posición del arbusto.
            else {
                //Restablecemos los recursos.
                this.resources = 3;
                this.sprite.src = aux; //Cambiamos al sprite de arbusto completo.
                this.passable = false; //El arbusto vuelve a bloquear el paso
            }
        };

        setTimeout(retryReappear, 30000); // Comenzamos a los 30s
    }
}