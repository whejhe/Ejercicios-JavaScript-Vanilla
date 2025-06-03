//Declaramos las dependencias a usar.
import { Tree } from "../entities/tree.js";
import { Rock } from "../entities/rock.js";
import { House } from "../entities/house.js";
import { WiseMan } from "../entities/wiseman.js";
import { WildGrass } from "../entities/wildGrass.js";
import { Portal } from "../entities/portal.js";
import { Water } from "../entities/water.js";
import { Floor } from "../entities/floor.js";
import { Bush } from "../entities/bush.js";

// Primer sprite de agua
const water1 = './sprites/water/water1.png';
const down1 = './sprites/water/water1-down.png';
const up1 = './sprites/water/water1-up.png';
const left1 = './sprites/water/water1-left.png';
const right1 = './sprites/water/water1-right.png';
const downLeft1 = './sprites/water/water1-downLeft.png';
const downRight1 = './sprites/water/water1-downRight.png';
const upLeft1 = './sprites/water/water1-upLeft.png';
const upRight1 = './sprites/water/water1-upRight.png';

// Segundo sprite de agua
const water2 = './sprites/water/water2.png';
const down2 = './sprites/water/water2-down.png';
const up2 = './sprites/water/water2-up.png';
const left2 = './sprites/water/water2-left.png';
const right2 = './sprites/water/water2-right.png';
const downLeft2 = './sprites/water/water2-downLeft.png';
const downRight2 = './sprites/water/water2-downRight.png';
const upLeft2 = './sprites/water/water2-upLeft.png';
const upRight2 = './sprites/water/water2-upRight.png';

const path = './sprites/terrain/path.png';
/**
 * Esta clase define las listas de entidades que componen el mapa del pueblo.
 * @author Luis Antonio Expósito Sánchez
 */
export const floor = [
    new Floor(384, 0, path),
    new Floor(384, 32, path),
    new Floor(384, 64, path),
    new Floor(384, 96, path),
    new Floor(384, 128, path),
    new Floor(384, 160, path),
    new Floor(384, 192, path),
    new Floor(384, 224, path), new Floor(416, 224, path), new Floor(448, 224, path),
    new Floor(64, 256, path), new Floor(448, 256, path), new Floor(224, 256, path),
    new Floor(0, 288, path), new Floor(32, 288, path), new Floor(64, 288, path), new Floor(96, 288, path), new Floor(128, 288, path), new Floor(224, 288, path), new Floor(448, 288, path), new Floor(480, 288, path), new Floor(512, 288, path), new Floor(544, 288, path), new Floor(576, 288, path), new Floor(608, 288, path), new Floor(640, 288, path), new Floor(672, 288, path), new Floor(704, 288, path), new Floor(736, 288, path), new Floor(768, 288, path),
    new Floor(128, 320, path), new Floor(160, 320, path), new Floor(192, 320, path), new Floor(224, 320, path),  new Floor(256, 320, path), new Floor(288, 320, path),  new Floor(320, 320, path), new Floor(352, 320, path), new Floor(384, 320, path), new Floor(416, 320, path), new Floor(448, 320, path), new Floor(640, 320, path), 
    new Floor(128, 352, path), new Floor(416, 352, path), new Floor(640, 352, path), 
    new Floor(128, 384, path), new Floor(416, 384, path), new Floor(544, 384, path), new Floor(576, 384, path), new Floor(608, 384, path), new Floor(640, 384, path), 
    new Floor(128, 416, path), new Floor(160, 416, path), new Floor(192, 416, path), new Floor(416, 416, path), new Floor(448, 416, path), new Floor(480, 416, path), new Floor(512, 416, path), new Floor(544, 416, path),
    new Floor(192, 448, path), new Floor(224, 448, path), new Floor(256, 448, path), new Floor(288, 448, path), new Floor(320, 448, path), new Floor(352, 448, path), new Floor(384, 448, path), new Floor(416, 448, path),
    new Floor(384, 480, path),
    new Floor(384, 512, path),
    new Floor(384, 544, path),
    new Floor(384, 576, path),
];

export const portal = [
    //Izquierda
    //new Portal(-64, 256, "forest", 736, 256),

    //Derecha
    //new Portal(768, 256, "volcano", 32, 256),

    //Arriba
    new Portal(384, 0, "land", 384, 544),

    //Abajo
    new Portal(352, 576, "transicionsnow", 352, 32),
];

export const rocks = [
    new Rock(320, 192), 
    new Rock(160, 256), 
    new Rock(512, 256),
    new Rock(320, 352),

    new Rock(0, 320), new Rock(768, 320),
    new Rock(0, 352), new Rock(768, 352),
    new Rock(0, 384), new Rock(734, 384), new Rock(768, 384),
    new Rock(0, 416), new Rock(32, 416), new Rock(702, 416), new Rock(734, 416), new Rock(768, 416),
    new Rock(0, 448), new Rock(32, 448), new Rock(64, 448), new Rock(734, 448), new Rock(768, 448),
    new Rock(0, 480), new Rock(32, 480), new Rock(64, 480), new Rock(288, 480), new Rock(734, 480), new Rock(768, 480),
    new Rock(0, 512), new Rock(32, 512), new Rock(224, 512), new Rock(256, 512), new Rock(288, 512), new Rock(734, 512), new Rock(768, 512),
];


export const trees = [
    new Tree(0, 0), new Tree(32, 0), new Tree(64, 0), new Tree(96, 0), new Tree(128, 0), new Tree(160, 0), new Tree(192, 0), new Tree(224, 0), new Tree(256, 0), new Tree(288, 0), new Tree(320, 0), new Tree(352, 0), new Tree(416, 0), new Tree(448, 0), new Tree(480, 0), new Tree(512, 0), new Tree(544, 0), new Tree(576, 0), new Tree(608, 0), new Tree(640, 0), new Tree(672, 0), new Tree(704, 0), new Tree(736, 0), new Tree(768, 0),
    new Tree(0, 32), new Tree(32, 32), new Tree(64, 32), new Tree(96, 32), new Tree(128, 32), new Tree(160, 32), new Tree(192, 32), new Tree(224, 32), new Tree(256, 32), new Tree(288, 32), new Tree(320, 32), new Tree(448, 32), new Tree(480, 32), new Tree(512, 32), new Tree(544, 32), new Tree(576, 32), new Tree(608, 32), new Tree(640, 32), new Tree(672, 32), new Tree(704, 32), new Tree(736, 32), new Tree(768, 32),
    new Tree(320, 64), new Tree(448, 64),
    new Tree(320, 96), new Tree(448, 96),

    new Tree(0, 128), new Tree(32, 128), new Tree(64, 128), new Tree(96, 128), new Tree(128, 128), new Tree(160, 128), new Tree(192, 128), new Tree(224, 128), new Tree(256, 128), new Tree(288, 128), new Tree(480, 128), new Tree(512, 128), new Tree(544, 128), new Tree(576, 128), new Tree(608, 128), new Tree(640, 128), new Tree(672, 128), new Tree(704, 128), new Tree(736, 128), new Tree(768, 128),
    new Tree(0, 160), new Tree(32, 160), new Tree(64, 160), new Tree(96, 160), new Tree(128, 160), new Tree(640, 160), new Tree(672, 160), new Tree(704, 160), new Tree(736, 160), new Tree(768, 160),
    new Tree(0, 192), new Tree(32, 192), new Tree(704, 192), new Tree(736, 192), new Tree(768, 192),
    new Tree(0, 224), new Tree(768, 224),
    new Tree(0, 256), new Tree(768, 256),

    new Tree(0, 544), new Tree(32, 544), new Tree(64, 544), new Tree(96, 544), new Tree(128, 544), new Tree(160, 544), new Tree(192, 544), new Tree(224, 544), new Tree(256, 544), new Tree(288, 544), new Tree(320, 544), new Tree(448, 544), new Tree(480, 544), new Tree(512, 544), new Tree(544, 544), new Tree(576, 544), new Tree(608, 544), new Tree(640, 544), new Tree(672, 544), new Tree(704, 544), new Tree(736, 544), new Tree(768, 544),
    new Tree(0, 576), new Tree(32, 576), new Tree(64, 576), new Tree(96, 576), new Tree(128, 576), new Tree(160, 576), new Tree(192, 576), new Tree(224, 576), new Tree(256, 576), new Tree(288, 576), new Tree(320, 576), new Tree(352, 576), new Tree(416, 576), new Tree(448, 576), new Tree(480, 576), new Tree(512, 576), new Tree(544, 576), new Tree(576, 576), new Tree(608, 576), new Tree(640, 576), new Tree(672, 576), new Tree(704, 576), new Tree(736, 576), new Tree(768, 576),

    new Tree(256, 288),
    new Tree(160, 448),
    new Tree(512, 480), new Tree(544, 480),

    //Futuros portales
    new Tree(384, 576),
    new Tree(768, 288),
    new Tree(0, 288),

];

export const houses = [
    new House(416, 160),
    new House(64, 192), new House(224, 192), 
    new House(608, 224),
    new House(352, 256),
    new House(576, 320),
    new House(192, 352), new House(480, 352),
    new House(320, 384),
    
];

export const teachers = [
    new WiseMan(416, 288),
];

export const waters = [
    // Arriba
    new Water(0, 64, [up1, up2]), new Water(32, 64, [up1, up2]), new Water(64, 64, [up1, up2]), new Water(96, 64, [up1, up2]), new Water(128, 64, [up1, up2]), new Water(160, 64, [up1, up2]), new Water(192, 64, [up1, up2]), new Water(224, 64, [up1, up2]), new Water(256, 64, [up1, up2]), new Water(288, 64, [upRight1, upRight2]), new Water(480, 64, [upLeft1, upLeft2]), new Water(512, 64, [up1, up2]), new Water(544, 64, [up1, up2]), new Water(576, 64, [up1, up2]), new Water(608, 64, [up1, up2]), new Water(640, 64, [up1, up2]), new Water(672, 64, [up1, up2]), new Water(704, 64, [up1, up2]), new Water(736, 64, [up1, up2]), new Water(768, 64, [up1, up2]),
    new Water(0, 96, [down1, down2]), new Water(32, 96, [down1, down2]), new Water(64, 96, [down1, down2]), new Water(96, 96, [down1, down2]), new Water(128, 96, [down1, down2]), new Water(160, 96, [down1, down2]), new Water(192, 96, [down1, down2]), new Water(224, 96, [down1, down2]), new Water(256, 96, [down1, down2]), new Water(288, 96, [downRight1, downRight2]), new Water(480, 96, [downLeft1, downLeft2]), new Water(512, 96, [down1, down2]), new Water(544, 96, [down1, down2]), new Water(576, 96, [down1, down2]), new Water(608, 96, [down1, down2]), new Water(640, 96, [down1, down2]), new Water(672, 96, [down1, down2]), new Water(704, 96, [down1, down2]), new Water(736, 96, [down1, down2]), new Water(768, 96, [down1, down2]),

    new Water(608, 448, [upLeft1, upLeft2]), new Water(640, 448, [up1, up2]), new Water(672, 448, [up1, up2]), new Water(704, 448, [upRight1, upRight2]),
    new Water(608, 480, [left1, left2]), new Water(640, 480, [water1, water2]), new Water(672, 480, [water1, water2]), new Water(704, 480, [right1, right2]),
    new Water(608, 512, [downLeft1, downLeft2]), new Water(640, 512, [down1, down2]), new Water(672, 512, [down1, down2]), new Water(704, 512, [downRight1, downRight2]),

];

export const wildGrass = [
    new WildGrass(352, 96), new WildGrass(384, 96), new WildGrass(416, 96),
    new WildGrass(352, 128), new WildGrass(384, 128), new WildGrass(416, 128),
    new WildGrass(288, 224), new WildGrass(320, 224), new WildGrass(352, 224), new WildGrass(384, 224), new WildGrass(416, 224), 
    new WildGrass(256, 256), new WildGrass(288, 256), new WildGrass(320, 256), new WildGrass(416, 256), 
    new WildGrass(288, 288), new WildGrass(320, 288),
    new WildGrass(480, 320), new WildGrass(512, 320), new WildGrass(544, 320),
    new WildGrass(96, 352), new WildGrass(128, 352), new WildGrass(256, 352), new WildGrass(288, 352), new WildGrass(352, 352), new WildGrass(384, 352), new WildGrass(448, 352), new WildGrass(544, 352),
    new WildGrass(96, 384), new WildGrass(128, 384), new WildGrass(256, 384), new WildGrass(288, 384), new WildGrass(384, 384), new WildGrass(448, 384),
    new WildGrass(224, 416), new WildGrass(256, 416), new WildGrass(288, 416), new WildGrass(384, 416),
    new WildGrass(128, 480), new WildGrass(160, 480), new WildGrass(192, 480),
    new WildGrass(128, 512), new WildGrass(160, 512), new WildGrass(192, 512), 
    
];
export const bushes = [
    new Bush(352, 64), new Bush(384, 64), new Bush(416, 64),
    new Bush(32, 256), new Bush(736, 256),
    new Bush(32, 288), new Bush(736, 288),
    new Bush(32, 320), new Bush(736, 320),
    new Bush(352, 512), new Bush(384, 512), new Bush(416, 512),
];

export const town = {
    grassSpritePath : './sprites/terrain/grass.png',
    trees,
    rocks,
    houses,
    teachers,
    waters,
    wildGrass,
    portal,
    floor,
    bushes
};