//Declaramos las dependencias a usar.
import { config } from "../config.js";

/**
 * Esta clase define la entidad para un árbol.
 * @author Luis Antonio Expósito Sánchez
 */
export class Tree {
    //Declaramos las propiedades de la clase.
    x = 0; //Almacena la coordenada X donde está el árbol.
    y = 0; //Almacena la coordenada Y donde está el árbol.
    sprite = new Image(); //Almacena el sprite del árbol.
    size = config.tileSize; //Almacena el tamaño del árbol.
    resources = 10; //Almacena la cantidad de madera que puede ser cosechada del árbol.
    hitboxXOffset = 9;
    hitboxYOffset = 6;
    hitboxWidthOffset = 19;
    hitboxHeightOffset = 16;

    /**
     * Constructor de la clase.
     * @param x Posición X donde está el árbol.
     * @param y Posición Y donde está el árbol.
     */
    constructor(x, y, sprite = './sprites/resources/tree.png') {
        //Configuramos las propiedades del árbol.
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
     * Función que dibuja el árbol.
     * @author Luis Antonio Expósito Sánchez
     */
    draw() {
        config.ctx.drawImage(this.sprite, this.x, this.y, this.size, this.size);
    }

    /**
     * Función que cosecha madera del árbol.
     * @author Luis Antonio Expósito Sánchez
     */
    harvest() {
        //Declaramos las variables a usar.
        let harvested = false; //Almacena true si se ha recolectado un recurso, false en caso de que no se haya recolectado porque se han acabado.
        let playerHability = config.player.habilities.chop; //Almacena la habilidad de leñador del jugador.
        let playerInventory = config.player.inventory; //Almacena el inventario del jugador.

        //Comprobamos si el árbol aún tiene recursos.
        if(this.resources > 0) {
            //Comprobamos si hay suficientes recursos para un corte completo.
            if (this.resources >= playerHability) {
                //Reducimos los recursos del árbol e incrementamos el inventario del jugador.
                this.resources -= playerHability;
                playerInventory.wood += playerHability;
            } 
            //Entendemos que quedan pocos recursos.
            else {
                //Si quedan pocos recursos, recolectamos solo los restantes.
                playerInventory.wood += this.resources;
                this.resources = 0;
            }
    
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
        let aux = this.sprite.src; //Almacenamos el sprite del árbol para uso posterior.
        this.sprite.src = './sprites/resources/tree_cutted.png';

        setTimeout(() => {
            //Restablecemos los recursos.
            this.resources = 10;
            
            //Cambiamos al sprite del árbol.
            this.sprite.src = aux;
        }, 30000); // 30 segundos en milisegundos
    }
}