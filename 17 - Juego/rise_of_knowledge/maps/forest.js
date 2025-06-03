//Declaramos las dependencias a usar.
import { Tree } from "../entities/tree.js";
import { House } from "../entities/house.js";
import { WoodCutter } from "../entities/woodcutter.js";
import { WildGrass } from "../entities/wildGrass.js";
import { Water } from "../entities/water.js";
import { Floor } from "../entities/floor.js";
import { Portal } from "../entities/portal.js";
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
 * Esta clase define las listas de entidades que componen el mapa del bosque.
 * @author Luis Antonio Expósito Sánchez
 */
export const bushes = [
    new Bush(320, 160),
    new Bush(320, 192),
    new Bush(608, 224), new Bush(640, 224),
    new Bush(704, 256),
    new Bush(704, 288),
    new Bush(704, 320),
    new Bush(384, 352), new Bush(416, 352),
    new Bush(544, 416),
    new Bush(544, 448),
];

export const floor = [
    new Floor(608, 128, path), new Floor(640, 128, path),
    new Floor(160, 160, path), new Floor(192, 160, path), new Floor(224, 160, path), new Floor(256, 160, path), new Floor(288, 160, path), new Floor(320, 160, path), new Floor(352, 160, path), new Floor(384, 160, path), new Floor(416, 160, path), new Floor(608, 160, path), new Floor(640, 160, path), 
    new Floor(160, 192, path), new Floor(192, 192, path), new Floor(224, 192, path), new Floor(256, 192, path), new Floor(288, 192, path), new Floor(320, 192, path), new Floor(352, 192, path), new Floor(384, 192, path), new Floor(416, 192, path), new Floor(608, 192, path), new Floor(640, 192, path),
    new Floor(160, 224, path), new Floor(192, 224, path), new Floor(384, 224, path), new Floor(416, 224, path), new Floor(608, 224, path), new Floor(640, 224, path),
    new Floor(32, 256, path), new Floor(64, 256, path), new Floor(96, 256, path), new Floor(128, 256, path), new Floor(160, 256, path), new Floor(192, 256, path), new Floor(384, 256, path), new Floor(416, 256, path), new Floor(608, 256, path), new Floor(640, 256, path), new Floor(672, 256, path), new Floor(704, 256, path), new Floor(736, 256, path), 
    new Floor(0, 288, path), new Floor(32, 288, path), new Floor(64, 288, path), new Floor(96, 288, path), new Floor(128, 288, path), new Floor(160, 288, path), new Floor(192, 288, path), new Floor(384, 288, path), new Floor(416, 288, path), new Floor(608, 288, path), new Floor(640, 288, path), new Floor(672, 288, path), new Floor(704, 288, path), new Floor(736, 288, path), new Floor(768, 288, path),
    new Floor(32, 320, path), new Floor(64, 320, path), new Floor(96, 320, path), new Floor(128, 320, path), new Floor(160, 320, path), new Floor(192, 320, path), new Floor(384, 320, path), new Floor(416, 320, path), new Floor(608, 320, path), new Floor(640, 320, path), new Floor(672, 320, path), new Floor(704, 320, path), new Floor(736, 320, path), 
    new Floor(384, 352, path), new Floor(416, 352, path), new Floor(608, 352, path), new Floor(640, 352, path),
    new Floor(384, 384, path), new Floor(416, 384, path), new Floor(608, 384, path), new Floor(640, 384, path),
    new Floor(384, 416, path), new Floor(416, 416, path), new Floor(448, 416, path), new Floor(480, 416, path), new Floor(512, 416, path), new Floor(544, 416, path), new Floor(576, 416, path), new Floor(608, 416, path), new Floor(640, 416, path),
    new Floor(384, 448, path), new Floor(416, 448, path), new Floor(448, 448, path), new Floor(480, 448, path), new Floor(512, 448, path), new Floor(544, 448, path), new Floor(576, 448, path), new Floor(608, 448, path), new Floor(640, 448, path),
];
export const portal = [
    new Portal(0, 288, "grassland", 736, 288),
    new Portal(768, 288, "land", 32, 288),
];
export const rocks = [
];
export const trees = [
    new Tree(0, 0), new Tree(32, 0), new Tree(64, 0), new Tree(96, 0), new Tree(128, 0), new Tree(160, 0), new Tree(192, 0), new Tree(224, 0), new Tree(256, 0), new Tree(288, 0), new Tree(320, 0), new Tree(352, 0), new Tree(384, 0), new Tree(416, 0), new Tree(448, 0), new Tree(480, 0), new Tree(512, 0), new Tree(544, 0), new Tree(576, 0), new Tree(608, 0), new Tree(640, 0), new Tree(672, 0), new Tree(704, 0), new Tree(736, 0), new Tree(768, 0), 
    new Tree(0, 32), new Tree(32, 32), new Tree(64, 32), new Tree(96, 32), new Tree(128, 32), new Tree(160, 32), new Tree(192, 32), new Tree(224, 32), new Tree(256, 32), new Tree(288, 32), new Tree(320, 32), new Tree(352, 32), new Tree(384, 32), new Tree(416, 32), new Tree(448, 32), new Tree(480, 32), new Tree(512, 32), new Tree(544, 32), new Tree(576, 32), new Tree(608, 32), new Tree(640, 32), new Tree(672, 32), new Tree(704, 32), new Tree(736, 32), new Tree(768, 32),
    new Tree(0, 64), new Tree(32, 64), new Tree(128, 64), new Tree(160, 64), new Tree(192, 64), new Tree(224, 64), new Tree(256, 64), new Tree(288, 64), new Tree(320, 64), new Tree(352, 64), new Tree(384, 64), new Tree(416, 64), new Tree(448, 64), new Tree(480, 64), new Tree(512, 64), new Tree(544, 64), new Tree(576, 64), new Tree(608, 64), new Tree(640, 64), new Tree(672, 64), new Tree(704, 64), new Tree(736, 64), new Tree(768, 64),
    new Tree(0, 96), new Tree(32, 96), new Tree(128, 96), new Tree(160, 96), new Tree(192, 96), new Tree(224, 96), new Tree(256, 96), new Tree(288, 96), new Tree(320, 96), new Tree(352, 96), new Tree(384, 96), new Tree(416, 96), new Tree(448, 96), new Tree(576, 96), new Tree(608, 96), new Tree(640, 96), new Tree(672, 96), new Tree(704, 96), new Tree(736, 96), new Tree(768, 96),
    new Tree(0, 128), new Tree(32, 128), new Tree(128, 128), new Tree(160, 128), new Tree(192, 128), new Tree(224, 128), new Tree(256, 128), new Tree(288, 128), new Tree(320, 128), new Tree(352, 128), new Tree(384, 128), new Tree(416, 128), new Tree(448, 128), new Tree(576, 128), new Tree(672, 128), new Tree(704, 128), new Tree(736, 128), new Tree(768, 128),
    new Tree(0, 160), new Tree(32, 160), new Tree(128, 160), new Tree(448, 160), new Tree(576, 160), new Tree(672, 160), new Tree(704, 160), new Tree(736, 160), new Tree(768, 160),
    new Tree(0, 192), new Tree(32, 192), new Tree(64, 192), new Tree(96, 192), new Tree(128, 192), new Tree(448, 192), new Tree(480, 192), new Tree(512, 192), new Tree(544, 192), new Tree(576, 192), new Tree(672, 192), new Tree(704, 192), new Tree(736, 192), new Tree(768, 192),
    new Tree(0, 224), new Tree(32, 224), new Tree(64, 224), new Tree(96, 224), new Tree(128, 224), new Tree(224, 224), new Tree(256, 224), new Tree(288, 224), new Tree(320, 224), new Tree(352, 224), new Tree(448, 224), new Tree(480, 224), new Tree(512, 224), new Tree(544, 224), new Tree(576, 224), new Tree(672, 224), new Tree(704, 224), new Tree(736, 224), new Tree(768, 224),
    new Tree(0, 256), new Tree(224, 256), new Tree(256, 256), new Tree(288, 256), new Tree(320, 256), new Tree(352, 256), new Tree(448, 256), new Tree(480, 256), new Tree(576, 256), new Tree(768, 256),
    new Tree(224, 288), new Tree(256, 288), new Tree(288, 288), new Tree(320, 288), new Tree(352, 288), new Tree(448, 288), new Tree(480, 288), new Tree(576, 288),
    new Tree(0, 320), new Tree(224, 320), new Tree(352, 320), new Tree(448, 320), new Tree(480, 320), new Tree(576, 320), new Tree(768, 320),
    new Tree(0, 352), new Tree(32, 352), new Tree(64, 352), new Tree(96, 352), new Tree(128, 352), new Tree(160, 352), new Tree(192, 352), new Tree(224, 352), new Tree(352, 352), new Tree(448, 352), new Tree(480, 352), new Tree(512, 352), new Tree(544, 352), new Tree(576, 352), new Tree(672, 352), new Tree(704, 352), new Tree(736, 352), new Tree(768, 352),
    new Tree(0, 384), new Tree(32, 384), new Tree(64, 384), new Tree(96, 384), new Tree(128, 384), new Tree(160, 384), new Tree(192, 384), new Tree(224, 384), new Tree(352, 384), new Tree(448, 384), new Tree(480, 384), new Tree(512, 384), new Tree(544, 384), new Tree(576, 384), new Tree(672, 384), new Tree(704, 384), new Tree(736, 384), new Tree(768, 384),
    new Tree(0, 416), new Tree(32, 416), new Tree(64, 416), new Tree(96, 416), new Tree(128, 416), new Tree(160, 416), new Tree(192, 416), new Tree(224, 416), new Tree(256, 416), new Tree(288, 416), new Tree(320, 416), new Tree(352, 416), new Tree(672, 416), new Tree(736, 416), new Tree(704, 416), new Tree(768, 416),
    new Tree(0, 448), new Tree(32, 448), new Tree(64, 448), new Tree(96, 448), new Tree(128, 448), new Tree(224, 448), new Tree(256, 448), new Tree(288, 448), new Tree(320, 448), new Tree(352, 448), new Tree(672, 448), new Tree(704, 448), new Tree(736, 448), new Tree(768, 448),
    new Tree(0, 480), new Tree(32, 480), new Tree(64, 480), new Tree(96, 480), new Tree(128, 480), new Tree(224, 480), new Tree(256, 480), new Tree(288, 480), new Tree(320, 480), new Tree(352, 480), new Tree(384, 480), new Tree(416, 480), new Tree(448, 480), new Tree(480, 480), new Tree(512, 480), new Tree(544, 480), new Tree(576, 480), new Tree(608, 480), new Tree(640, 480), new Tree(672, 480), new Tree(704, 480), new Tree(736, 480), new Tree(768, 480),
    new Tree(0, 512), new Tree(32, 512), new Tree(64, 512), new Tree(96, 512), new Tree(128, 512), new Tree(224, 512), new Tree(256, 512), new Tree(288, 512), new Tree(320, 512), new Tree(352, 512), new Tree(384, 512), new Tree(416, 512), new Tree(448, 512), new Tree(480, 512), new Tree(512, 512), new Tree(544, 512), new Tree(576, 512), new Tree(608, 512), new Tree(640, 512), new Tree(672, 512), new Tree(704, 512), new Tree(736, 512), new Tree(768, 512),
    new Tree(0, 544), new Tree(32, 544), new Tree(64, 544), new Tree(96, 544), new Tree(128, 544), new Tree(160, 544), new Tree(192, 544), new Tree(224, 544), new Tree(256, 544), new Tree(288, 544), new Tree(320, 544), new Tree(352, 544), new Tree(384, 544), new Tree(416, 544), new Tree(448, 544), new Tree(480, 544), new Tree(512, 544), new Tree(544, 544), new Tree(576, 544), new Tree(608, 544), new Tree(640, 544), new Tree(672, 544), new Tree(704, 544), new Tree(736, 544), new Tree(768, 544),
    new Tree(0, 576), new Tree(32, 576), new Tree(64, 576), new Tree(96, 576), new Tree(128, 576), new Tree(160, 576), new Tree(192, 576), new Tree(224, 576), new Tree(256, 576), new Tree(288, 576), new Tree(320, 576), new Tree(352, 576), new Tree(384, 576), new Tree(416, 576), new Tree(448, 576), new Tree(480, 576), new Tree(512, 576), new Tree(544, 576), new Tree(576, 576), new Tree(608, 576), new Tree(640, 576), new Tree(672, 576), new Tree(704, 576), new Tree(736, 576), new Tree(768, 576),
];
export const houses = [
    new House(64, 64), new House(160, 448), new House(512, 256),
    // new House(448, 192), new House(448, 352)
];
export const teachers = [
    new WoodCutter(608, 128),
];
export const waters = [
    new Water(256, 320, [upLeft1, upLeft2]), new Water(288, 320, [up1, up2]), new Water(320, 320, [upRight1, upRight2]),
    new Water(256, 352, [left1, left2]), new Water(288, 352, [water1, water2]), new Water(320, 352, [right1, right2]),
    new Water(256, 384, [downLeft1, downLeft2]), new Water(288, 384, [down1, down2]), new Water(320, 384, [downRight1, downRight2]),

    new Water(480, 96, [upLeft1, upLeft2]), new Water(512, 96, [up1, up2]), new Water(544, 96, [upRight1, upRight2]),
    new Water(480, 128, [left1, left2]), new Water(512, 128, [water1, water2]), new Water(544, 128, [right1, right2]),
    new Water(480, 160, [downLeft1, downLeft2]), new Water(512, 160, [down1, down2]), new Water(544, 160, [downRight1, downRight2]),
];
export const wildGrass = [
    new WildGrass(160, 160), new WildGrass(192, 160), new WildGrass(224, 160),
    new WildGrass(160, 192), new WildGrass(192, 192), new WildGrass(224, 192),
    new WildGrass(160, 224), new WildGrass(192, 224), 

    new WildGrass(384, 224), new WildGrass(416, 224), 
    new WildGrass(384, 256), new WildGrass(416, 256), 

    new WildGrass(448, 416), new WildGrass(480, 416), new WildGrass(512, 416),
    new WildGrass(448, 448), new WildGrass(480, 448), new WildGrass(512, 448),

    new WildGrass(608, 384), new WildGrass(640, 384),
    new WildGrass(576, 416), new WildGrass(608, 416), new WildGrass(640, 416),
    new WildGrass(576, 448), new WildGrass(608, 448), new WildGrass(640, 448),
];

export const forest = {
    grassSpritePath : './sprites/terrain/grass.png',
    trees,
    rocks,
    houses,
    teachers,
    waters,
    wildGrass,
    portal,
    bushes,
    floor
};
