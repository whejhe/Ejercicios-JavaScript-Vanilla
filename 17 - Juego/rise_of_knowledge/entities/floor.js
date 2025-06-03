//Declaramos las dependencias a usar.
import { config } from "../config.js";

/**
 * Esta clase define la entidad para el suelo.
 * @author Luis Antonio Expósito Sánchez
 */
export class Floor {
    //Declaramos las propiedades de la clase.
    x = 0; //Almacena la coordenada X donde está el suelo.
    y = 0; //Almacena la coordenada Y donde está el suelo.
    sprite = new Image(); //Almacena el sprite de el suelo.
    size = config.tileSize; //Almacena el tamaño de el suelo.

    /**
     * Constructor de la clase.
     * @param x Posición X donde está el suelo.
     * @param y Posición Y donde está el suelo.
     * @author Luis Antonio Expósito Sánchez
     */
    constructor(x, y, sprite = './sprites/grass.png') {
        //Configuramos las propiedades de el suelo.
        this.x = x;
        this.y = y;
        this.sprite.src = sprite;
    }

    /**
     * Función que dibuja el suelo.
     * @author Luis Antonio Expósito Sánchez
     */
    draw() {
        config.ctx.drawImage(this.sprite, this.x, this.y, this.size, this.size);
    }
}