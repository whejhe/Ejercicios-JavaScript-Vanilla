//Declaramos las dependencias a usar.
import { Rock } from "../entities/rock.js";
import { WildGrass } from "../entities/wildGrass.js";
import { Portal } from "../entities/portal.js";
import { Water } from "../entities/water.js";
import { Miner } from "../entities/miner.js";
import { House } from "../entities/house.js";
import { Tree } from "../entities/tree.js";
import { Bush } from "../entities/bush.js";
import { Floor } from "../entities/floor.js";

const down = './sprites/water/down.png';
const up = './sprites/water/up.png';
const left = './sprites/water/left.png';
const right = './sprites/water/right.png';
const upLeft = './sprites/water/upLeft.png';
const upRight = './sprites/water/upRight.png';
const downLeft = './sprites/water/downLeft.png';
const downRight = './sprites/water/downRight.png';
const upLeftReverse = './sprites/water/upLeftReverse.png';
const upRightReverse = './sprites/water/upRightReverse.png';
const downLeftReverse = './sprites/water/downLeftReverse.png';
const downRightReverse = './sprites/water/downRightReverse.png';

const path_snow = './sprites/terrain/path_snow.png';
const bush_snow = './sprites/resources/bush_snow.png';
const tree_snow = './sprites/resources/tree_snow.png';
const rock_snow = './sprites/resources/rock_snow.png';
const wild = './sprites/resources/wildGrass_snow.png';
const wildDown = './sprites/resources/wildGrassDown_snow.png';
const house_snow = './sprites/house_snow.png';

/**
 * Esta clase define las listas de entidades que componen el mapa del tutorial.
 * @author Luis Antonio Expósito Sánchez
 */
export const portal = [
    new Portal (384, 0, "snowForest", 384, 544),
    new Portal (0, 288, "snowtown", 736, 288),
    new Portal (768, 288, "snowbay", 32, 288),
];

export const trees = [
    new Tree(0, 0, tree_snow),new Tree(32, 0, tree_snow),new Tree(64, 0, tree_snow),new Tree(96, 0, tree_snow),new Tree(128, 0, tree_snow),new Tree(160, 0, tree_snow),new Tree(192, 0, tree_snow),new Tree(224, 0, tree_snow),new Tree(256, 0, tree_snow),new Tree(352, 0, tree_snow), new Tree(416, 0, tree_snow),
    new Tree(0, 32, tree_snow),
    new Tree(0, 64, tree_snow),
    new Tree(0, 96, tree_snow),
    new Tree(0, 128, tree_snow),
    new Tree(0, 160, tree_snow),
    new Tree(0, 256, tree_snow), new Tree(768, 256, tree_snow),
    new Tree(0, 320, tree_snow), new Tree(768, 320, tree_snow),
    new Tree(768, 416, tree_snow),
    new Tree(768, 448, tree_snow),
    new Tree(768, 480, tree_snow),
    new Tree(768, 512, tree_snow),
    new Tree(768, 544, tree_snow),
    new Tree(352, 576, tree_snow),new Tree(384, 576, tree_snow), new Tree(416, 576, tree_snow),new Tree(512, 576, tree_snow),new Tree(544, 576, tree_snow),new Tree(576, 576, tree_snow),new Tree(608, 576, tree_snow),new Tree(640, 576, tree_snow),new Tree(672, 576, tree_snow),new Tree(704, 576, tree_snow),new Tree(736, 576, tree_snow), new Tree(768, 576, tree_snow),



    new Tree(-32, 288),
    new Tree(800, 288),
    new Tree(384, -32),
    new Tree(384, 608)
];

export const bushes = [
    new Bush(352, 192, bush_snow), new Bush(384, 192, bush_snow), new Bush(416, 192, bush_snow),
    new Bush(256, 288, bush_snow),
    new Bush(352, 384, bush_snow), new Bush(384, 384, bush_snow), new Bush(416, 384, bush_snow),
    new Bush(512, 288, bush_snow),
];


export const waters = [
    //Arriba izquierda
    new Water(288, 0, left), new Water(320, 0, right),
    new Water(288, 32, left), new Water(320, 32, right),
    new Water(288, 64, downLeft), new Water(320, 64, downRight),
    // new Water(288, 96, left), new Water(320, 96, right),
    new Water(288, 128, upLeft), new Water(320, 128, upRight),
    new Water(288, 160, left), new Water(320, 160, right),
    new Water(0, 192, up), new Water(32, 192, up), new Water(64, 192, up), new Water(96, 192, upRight), new Water(192, 192, upLeft), new Water(224, 192, up), new Water(256, 192, up), new Water(288, 192, upLeftReverse), new Water(320, 192, right),
    new Water(0, 224, down), new Water(32, 224, down), new Water(64, 224, down), new Water(96, 224, downRight), new Water(192, 224, downLeft), new Water(224, 224, down), new Water(256, 224, down), new Water(288, 224, down), new Water(320, 224, downRight),

    //Arriba derecha
    new Water(448, 0, left), new Water(480, 0, right),
    new Water(448, 32, left), new Water(480, 32, right),
    new Water(448, 64, downLeft), new Water(480, 64, downRight),
    // new Water(448, 96, left), new Water(480, 96, right),
    new Water(448, 128, upLeft), new Water(480, 128, upRight),
    new Water(448, 160, left), new Water(480, 160, right),
    new Water(448, 192, left), new Water(480, 192, upRightReverse), new Water(512, 192, up), new Water(544, 192, up), new Water(576, 192, upRight), new Water(672, 192, upLeft), new Water(704, 192, up), new Water(736, 192, up), new Water(768, 192, up),
    new Water(448, 224, downLeft), new Water(480, 224, down), new Water(512, 224, down), new Water(544, 224, down), new Water(576, 224, downRight), new Water(672, 224, downLeft), new Water(704, 224, down), new Water(736, 224, down), new Water(768, 224, down),

    //Abajo izquierda
    new Water(0, 352, up), new Water(32, 352, up), new Water(64, 352, up), new Water(96, 352, upRight), new Water(192, 352, upLeft), new Water(224, 352, up), new Water(256, 352, up), new Water(288, 352, up), new Water(320, 352, upRight),
    new Water(0, 384, down), new Water(32, 384, down), new Water(64, 384, down), new Water(96, 384, downRight), new Water(192, 384, downLeft), new Water(224, 384, down), new Water(256, 384, down), new Water(288, 384, downLeftReverse), new Water(320, 384, right),
    new Water(288, 416, left), new Water(320, 416, right),
    new Water(288, 448, downLeft), new Water(320, 448, downRight),
    // new Water(288, 480, left), new Water(320, 480, right),
    new Water(288, 512, upLeft), new Water(320, 512, upRight),
    new Water(288, 544, left), new Water(320, 544, right),
    new Water(288, 576, left), new Water(320, 576, right),

    //Abajo derecha
    new Water(448, 352, upLeft), new Water(480, 352, up), new Water(512, 352, up), new Water(544, 352, up), new Water(576, 352, upRight), new Water(672, 352, upLeft), new Water(704, 352, up), new Water(736, 352, up), new Water(768, 352, up),
    new Water(448, 384, left), new Water(480, 384, downRightReverse), new Water(512, 384, down), new Water(544, 384, down), new Water(576, 384, downRight), new Water(672, 384, downLeft), new Water(704, 384, down), new Water(736, 384, down), new Water(768, 384, down),
    new Water(448, 416, left), new Water(480, 416, right),
    new Water(448, 448, downLeft), new Water(480, 448, downRight),
    // new Water(448, 480, left), new Water(480, 480, right),
    new Water(448, 512, upLeft), new Water(480, 512, upRight),
    new Water(448, 544, left), new Water(480, 544, right),
    new Water(448, 576, left), new Water(480, 576, right),
];

export const rocks = [
    new Rock(512, 0, rock_snow),new Rock(544, 0, rock_snow),new Rock(576, 0, rock_snow),new Rock(608, 0, rock_snow),new Rock(640, 0, rock_snow),new Rock(672, 0, rock_snow),new Rock(704, 0, rock_snow),new Rock(736, 0, rock_snow), new Rock(768, 0, rock_snow),
    new Rock(768, 32, rock_snow),
    new Rock(768, 64, rock_snow),
    new Rock(768, 96, rock_snow),
    new Rock(768, 128, rock_snow),
    new Rock(768, 160, rock_snow),
    new Rock(256, 256, rock_snow), new Rock(512, 256, rock_snow), 
    new Rock(256, 320, rock_snow), new Rock(512, 320, rock_snow),
    new Rock(0, 416, rock_snow),
    new Rock(0, 448, rock_snow),
    new Rock(0, 480, rock_snow),
    new Rock(0, 512, rock_snow),
    new Rock(0, 544, rock_snow),
    new Rock(0, 576, rock_snow), new Rock(32, 576, rock_snow), new Rock(64, 576, rock_snow),new Rock(96, 576, rock_snow),new Rock(128, 576, rock_snow),new Rock(160, 576, rock_snow),new Rock(192, 576, rock_snow),new Rock(224, 576, rock_snow),new Rock(256, 576, rock_snow),
];

export const teachers = [
     new Miner(640, 64)
];

export const houses = [
    new House(96, 32, house_snow),
    new House(704, 416, house_snow),
];

export const wildGrass = [
    new WildGrass(32, 32, wild, wildDown), new WildGrass(64, 32, wild, wildDown), new WildGrass(160, 32, wild, wildDown), new WildGrass(192, 32, wild, wildDown), new WildGrass(224, 32, wild, wildDown), new WildGrass(256, 32, wild, wildDown), new WildGrass(512, 32, wild, wildDown), new WildGrass(544, 32, wild, wildDown), new WildGrass(576, 32, wild, wildDown), new WildGrass(608, 32, wild, wildDown), new WildGrass(640, 32, wild, wildDown), new WildGrass(672, 32, wild, wildDown), new WildGrass(704, 32, wild, wildDown), new WildGrass(736, 32, wild, wildDown),
    new WildGrass(32, 64, wild, wildDown), new WildGrass(64, 64, wild, wildDown), new WildGrass(160, 64, wild, wildDown), new WildGrass(192, 64, wild, wildDown), new WildGrass(224, 64, wild, wildDown), new WildGrass(256, 64, wild, wildDown), new WildGrass(512, 64, wild, wildDown), new WildGrass(544, 64, wild, wildDown), new WildGrass(576, 64, wild, wildDown), new WildGrass(608, 64, wild, wildDown), new WildGrass(640, 64, wild, wildDown), new WildGrass(672, 64, wild, wildDown), new WildGrass(704, 64, wild, wildDown), new WildGrass(736, 64, wild, wildDown),
    new WildGrass(32, 96, wild, wildDown), new WildGrass(64, 96, wild, wildDown), new WildGrass(160, 96, wild, wildDown), new WildGrass(192, 96, wild, wildDown), new WildGrass(224, 96, wild, wildDown), new WildGrass(256, 96, wild, wildDown), new WildGrass(512, 96, wild, wildDown), new WildGrass(544, 96, wild, wildDown), new WildGrass(576, 96, wild, wildDown), new WildGrass(608, 96, wild, wildDown), new WildGrass(640, 96, wild, wildDown), new WildGrass(672, 96, wild, wildDown), new WildGrass(704, 96, wild, wildDown), new WildGrass(736, 96, wild, wildDown),
    new WildGrass(32, 128, wild, wildDown), new WildGrass(64, 128, wild, wildDown), new WildGrass(96, 128, wild, wildDown), new WildGrass(128, 128, wild, wildDown), new WildGrass(160, 128, wild, wildDown), new WildGrass(192, 128, wild, wildDown), new WildGrass(224, 128, wild, wildDown), new WildGrass(256, 128, wild, wildDown), new WildGrass(512, 128, wild, wildDown), new WildGrass(544, 128, wild, wildDown), new WildGrass(576, 128, wild, wildDown), new WildGrass(608, 128, wild, wildDown), new WildGrass(640, 128, wild, wildDown), new WildGrass(672, 128, wild, wildDown), new WildGrass(704, 128, wild, wildDown), new WildGrass(736, 128, wild, wildDown),
    new WildGrass(32, 160, wild, wildDown), new WildGrass(64, 160, wild, wildDown), new WildGrass(96, 160, wild, wildDown), new WildGrass(128, 160, wild, wildDown), new WildGrass(160, 160, wild, wildDown), new WildGrass(192, 160, wild, wildDown), new WildGrass(224, 160, wild, wildDown), new WildGrass(256, 160, wild, wildDown), new WildGrass(512, 160, wild, wildDown), new WildGrass(544, 160, wild, wildDown), new WildGrass(576, 160, wild, wildDown), new WildGrass(608, 160, wild, wildDown), new WildGrass(640, 160, wild, wildDown), new WildGrass(672, 160, wild, wildDown), new WildGrass(704, 160, wild, wildDown), new WildGrass(736, 160, wild, wildDown),

    new WildGrass(32, 416, wild, wildDown), new WildGrass(64, 416, wild, wildDown), new WildGrass(96, 416, wild, wildDown), new WildGrass(128, 416, wild, wildDown), new WildGrass(160, 416, wild, wildDown), new WildGrass(192, 416, wild, wildDown), new WildGrass(224, 416, wild, wildDown), new WildGrass(256, 416, wild, wildDown), new WildGrass(512, 416, wild, wildDown), new WildGrass(544, 416, wild, wildDown), new WildGrass(576, 416, wild, wildDown), new WildGrass(608, 416, wild, wildDown), new WildGrass(640, 416, wild, wildDown), new WildGrass(672, 416, wild, wildDown), 
    new WildGrass(32, 448, wild, wildDown), new WildGrass(64, 448, wild, wildDown), new WildGrass(96, 448, wild, wildDown), new WildGrass(128, 448, wild, wildDown), new WildGrass(160, 448, wild, wildDown), new WildGrass(192, 448, wild, wildDown), new WildGrass(224, 448, wild, wildDown), new WildGrass(256, 448, wild, wildDown), new WildGrass(512, 448, wild, wildDown), new WildGrass(544, 448, wild, wildDown), new WildGrass(576, 448, wild, wildDown), new WildGrass(608, 448, wild, wildDown), new WildGrass(640, 448, wild, wildDown), new WildGrass(672, 448, wild, wildDown),
    new WildGrass(32, 480, wild, wildDown), new WildGrass(64, 480, wild, wildDown), new WildGrass(96, 480, wild, wildDown), new WildGrass(128, 480, wild, wildDown), new WildGrass(160, 480, wild, wildDown), new WildGrass(192, 480, wild, wildDown), new WildGrass(224, 480, wild, wildDown), new WildGrass(256, 480, wild, wildDown), new WildGrass(512, 480, wild, wildDown), new WildGrass(544, 480, wild, wildDown), new WildGrass(576, 480, wild, wildDown), new WildGrass(608, 480, wild, wildDown), new WildGrass(640, 480, wild, wildDown), new WildGrass(672, 480, wild, wildDown),
    new WildGrass(32, 512, wild, wildDown), new WildGrass(64, 512, wild, wildDown), new WildGrass(96, 512, wild, wildDown), new WildGrass(128, 512, wild, wildDown), new WildGrass(160, 512, wild, wildDown), new WildGrass(192, 512, wild, wildDown), new WildGrass(224, 512, wild, wildDown), new WildGrass(256, 512, wild, wildDown), new WildGrass(512, 512, wild, wildDown), new WildGrass(544, 512, wild, wildDown), new WildGrass(576, 512, wild, wildDown), new WildGrass(608, 512, wild, wildDown), new WildGrass(640, 512, wild, wildDown), new WildGrass(672, 512, wild, wildDown), new WildGrass(704, 512, wild, wildDown), new WildGrass(736, 512, wild, wildDown),
    new WildGrass(32, 544, wild, wildDown), new WildGrass(64, 544, wild, wildDown), new WildGrass(96, 544, wild, wildDown), new WildGrass(128, 544, wild, wildDown), new WildGrass(160, 544, wild, wildDown), new WildGrass(192, 544, wild, wildDown), new WildGrass(224, 544, wild, wildDown), new WildGrass(256, 544, wild, wildDown), new WildGrass(512, 544, wild, wildDown), new WildGrass(544, 544, wild, wildDown), new WildGrass(576, 544, wild, wildDown), new WildGrass(608, 544, wild, wildDown), new WildGrass(640, 544, wild, wildDown), new WildGrass(672, 544, wild, wildDown), new WildGrass(704, 544, wild, wildDown), new WildGrass(736, 544, wild, wildDown),
];
export const floor = [
    new Floor(384,0,path_snow),
    new Floor(384,32,path_snow), 
    new Floor(384,64,path_snow), 
    new Floor(384,96,path_snow),
    new Floor(384,128,path_snow), 
    new Floor(384,160,path_snow), 
    new Floor(384,192,path_snow),
    new Floor(384,224,path_snow),
    new Floor(384, 256, path_snow),
    new Floor(0, 288, path_snow), new Floor(32, 288, path_snow), new Floor(64, 288, path_snow), new Floor(96, 288, path_snow), new Floor(128, 288, path_snow), new Floor(160, 288, path_snow), new Floor(192, 288, path_snow), new Floor(224, 288, path_snow), new Floor(256, 288, path_snow), new Floor(288, 288, path_snow), new Floor(320, 288, path_snow), new Floor(352, 288, path_snow), new Floor(384, 288, path_snow), new Floor(416, 288, path_snow), new Floor(448, 288, path_snow), new Floor(480, 288, path_snow), new Floor(512, 288, path_snow), new Floor(544, 288, path_snow), new Floor(576, 288, path_snow), new Floor(608, 288, path_snow), new Floor(640, 288, path_snow), new Floor(672, 288, path_snow), new Floor(704, 288, path_snow), new Floor(736, 288, path_snow), new Floor(768, 288, path_snow),
    new Floor(384, 320, path_snow),
    new Floor(384, 352, path_snow),
    new Floor(384, 384, path_snow),
    new Floor(384, 416, path_snow),
    new Floor(384, 448, path_snow),
    new Floor(384, 480, path_snow),
    new Floor(384, 512, path_snow),
    new Floor(384, 544, path_snow),

];

const img = new Image();
img.src = './sprites/resources/wildGrass.png';
img.onload = () => console.log("Imagen cargada correctamente");
img.onerror = () => console.log("Error al cargar la imagen");

export const icevalley = {
    grassSpritePath : './sprites/terrain/snow.png',
    rocks,
    teachers,
    waters,
    wildGrass,
    portal,
    trees,
    houses,
    bushes,
    floor
};
