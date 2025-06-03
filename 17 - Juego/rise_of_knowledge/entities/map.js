//Declaramos las dependencias a usar.
import { config } from "../config.js";

/**
 * Esta clase define la entidad para un mapa.
 * @author Luis Antonio Expósito Sánchez
 */
export class Map {
    //Declaramos las propiedades de la clase.
    mapName = ''; //Almacena el nombre del mapa.
    grassSprite = null; //Almacena el sprite base del suelo.
    rocks = []; //Almacena la lista de rocas que tiene el mapa.
    trees = []; //Almacena la lista de árboles que tiene el mapa.
    houses = []; //Almacena la lista de casas que tiene el mapa.
    teachers = []; //Almacena la lista de profesores del mapa.
    waters = []; //Almacena la lista de agua del mapa.
    wildGrass = []; //Almacena la lista de hierba que tiene el mapa.
    portal = []; //Almacena la lista de portales que tiene el mapa.
    floor = []; //Almacena la lista de suelos que tiene el mapa.
    bushes = []; //Almacena la lista de arbustos que tiene el mapa.

    /**
     * Constructor de la clase.
     * @param mapName Nombre del mapa.
     * @author Luis Antonio Expósito Sánchez
     */
    constructor(mapName, grassSpritePath = "./sprites/terrain/grass.png") {
        //Configuramos las propiedades del mapa.
        this.mapName = mapName;
        this.grassSprite = new Image();
        this.grassSprite.src = grassSpritePath; //Cargamos el sprite del suelo.
        this.grassSprite.onload = () => console.log("Sprite del suelo cargado:", grassSpritePath);
        this.grassSprite.onerror = () => console.error("Error cargando sprite del suelo:", grassSpritePath);
    }

    /**
     * Función que obtiene la configuración del mapa.
     * @param mapName Nombre del mapa
     * @returns 
     */
    async getMapConfig() {
        //Declaramos las variables a usar.
        let mapContent; //Almacena la configuración del mapa.

        try {
            //Obtenemos la configuración.
            mapContent = await import(`../maps/${this.mapName}.js`);

            //Configuramos las entidades del mapa.
            this.rocks = mapContent.rocks;
            this.trees = mapContent.trees;
            this.houses = mapContent.houses;
            this.teachers = mapContent.teachers;
            this.waters = mapContent.waters;
            this.wildGrass = mapContent.wildGrass;
            this.portal = mapContent.portal;
            this.floor = mapContent.floor;
            this.bushes = mapContent.bushes;
        } catch (error) {
            console.log("Error al carga el mapa", error);
        }
    }

    /**
     * Función que dibuja el mapa.
     * @author Luis Antonio Expósito Sánchez
     */
    draw() {
        //Dibujamos el suelo.
        config.ctx.fillStyle = config.ctx.createPattern(this.grassSprite, "repeat");
        config.ctx.fillRect(0, 0, config.canvas.width, config.canvas.height);

        //Dibujamos el suelo.
        this.floor.forEach(floor => floor.draw());
        
        //Dibujamos los árboles.
        this.trees.forEach(tree => tree.draw());

        //Dibujamos los arbustos.
        this.bushes.forEach(bush => bush.draw());

        //Dibujamos las rocas.
        this.rocks.forEach(rock => rock.draw());

        //Dibujamos las casas.
        this.houses.forEach(house => house.draw());

        //Dibujamos los profesores.
        this.teachers.forEach(teacher => teacher.draw());

        //Dibujamos el agua.
        this.waters.forEach(water => water.draw());

        // Actualizar y dibujar la hierba salvaje.
        // this.wildGrass.forEach(grass => {
        //     grass.cross(config.player);
        //     grass.draw();

        // });

        //Dibujamos el portal.
        // Actualizar y dibujar el portal.
        this.portal.forEach(portal => {
            portal.cross(config.player);
            portal.draw();
        });
    }

    /** 
     * Función que obtiene una lista con las entidades con las que se puede colisionar en el mapa.
     * @author Luis Antonio Expósito Sánchez
     */
    getCollisionableEntities() {
        const bushesBlocked = this.bushes.filter(bush => !bush.passable); // Filtramos los arbustos que no son pasables.
        return [...this.rocks, ...this.trees, ...this.teachers, ...this.houses, ...this.waters, ...bushesBlocked];
    }

    /** 
     * Función que obtiene una lista con las entidades con las que se puede interatuar en el mapa.
     * @author Luis Antonio Expósito Sánchez
     */
    getInteractableEntities() {
        return [...this.rocks, ...this.trees, ...this.bushes, ...this.teachers, ...this.wildGrass];// añadir portal mas adelante
    }

}