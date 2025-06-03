//Declaramos las dependencias a usar.
import { config } from "../config.js";

/**
 * Esta clase define la entidad para una casa.
 * @author Luis Antonio Expósito Sánchez
 */
export class House {
    //Declaramos las propiedades de la clase.
    x = 0; //Almacena la coordenada X donde está la casa.
    y = 0; //Almacena la coordenada Y donde está la casa.
    sprite = new Image(); //Almacena el sprite de la casa.
    size = config.tileSize * 2; //Almacena el tamaño de la casa.
    hitboxXOffset = 8;
    hitboxYOffset = 6;
    hitboxWidthOffset = 16;
    hitboxHeightOffset = 20;

    /**
     * Constructor de la clase.
     * @param x Posición X donde está la casa.
     * @param y Posición Y donde está la casa.
     * @author Luis Antonio Expósito Sánchez
     */
    constructor(x, y, sprite = './sprites/house.png') {
        //Configuramos las propiedades de la casa.
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
     * Función que dibuja la casa.
     * @author Luis Antonio Expósito Sánchez
     */
    draw() {
        config.ctx.drawImage(this.sprite, this.x, this.y, this.size, this.size);
    }
}