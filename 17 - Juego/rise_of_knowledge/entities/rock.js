//Declaramos las dependencias a usar.
import { config } from "../config.js";

/**
 * Esta clase define la entidad para una roca.
 * @author Luis Antonio Expósito Sánchez
 */
export class Rock {
    //Declaramos las propiedades de la clase.
    x = 0; //Almacena la coordenada X donde está la roca.
    y = 0; //Almacena la coordenada Y donde está la roca.
    sprite = new Image(); //Almacena el sprite de la roca.
    size = config.tileSize; //Almacena el tamaño de la roca.
    resources = 10; //Almacena la cantidad de piedra que puede ser cosechada de la roca.
    hitboxXOffset = 9;
    hitboxYOffset = 5;
    hitboxWidthOffset = 19;
    hitboxHeightOffset = 16;

    /**
     * Constructor de la clase.
     * @param x Posición X donde está la roca.
     * @param y Posición Y donde está la roca.
     */
    constructor(x, y, sprite = './sprites/resources/rock.png') {
        //Configuramos las propiedades de la roca.
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
     * Función que dibuja la roca.
     * @author Luis Antonio Expósito Sánchez
     */
    draw() {
        config.ctx.drawImage(this.sprite, this.x, this.y, this.size, this.size);

        //config.ctx.strokeStyle = 'black';
        //config.ctx.lineWidth= 2;
        //config.ctx.strokeRect(this.x, this.y, this.size, this.size) // Color del borde
    }

    /**
     * Función que cosecha piedra de la roca.
     * @author Luis Antonio Expósito Sánchez
     */
    harvest() {
        //Declaramos las variables a usar.
        let harvested = false; //Almacena true si se ha recolectado un recurso, false en caso de que no se haya recolectado porque se han acabado.

        //Comprobamos si la roca aún tiene recursos.
        if (this.resources > 0) {
            //Actualizamos los recursos de la madera e inventario.
            this.resources -= config.player.habilities.mine;
            config.player.inventory.stone += config.player.habilities.mine;

            harvested = true;

            //Comprobamos si los recursos se han agotado.
            if(this.resources === 0) {
                //Iniciamos el reseteo de recursos.
                this.resetResources();
            }
        }

        return harvested;
    }

    /**
     * Función que restablece los recursos del árbol.
     * @author Luis Antonio Expósito Sánchez
     */
    resetResources() {
        //Cambiamos al sprite de crecimiento.
        let aux = this.sprite.src; //Almacenamos el sprite de la roca para uso posterior.
        this.sprite.src = './sprites/resources/rock_mined.png';

        setTimeout(() => {
            //Restablecemos los recursos.
            this.resources = 10;
            
            //Cambiamos al sprite de la roca.
            this.sprite.src = aux;
        }, 30000); // 30 segundos en milisegundos
    }
    // let minedSprite = this.sprite.src.replace('.png', '_mined.png'); //Almacenamos el sprite de la roca minada.
    // //Cambiamos al sprite de crecimiento.
    // this.sprite.src = minedSprite;

    // setTimeout(() => {
    //     //Restablecemos los recursos.
    //     this.resources = 10;
        
    //     //Cambiamos al sprite del árbol.
    //     this.sprite.src = minedSprite.replace('_mined.png', '.png');
    // }, 30000); // 30 segundos en milisegundos
}