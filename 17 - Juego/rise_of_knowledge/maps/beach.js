//Declaramos las dependencias a usar.
import { Tree } from "../entities/tree.js";
import { Rock } from "../entities/rock.js";
import { Miner } from "../entities/miner.js";
import { House } from "../entities/house.js";
import { WoodCutter } from "../entities/woodcutter.js";
import { WiseMan } from "../entities/wiseman.js";
import { Water } from "../entities/water.js";
import { WildGrass } from "../entities/wildGrass.js";
import { Portal } from "../entities/portal.js";
import { Bush } from "../entities/bush.js";
import { Floor } from "../entities/floor.js";

let palm = './sprites/resources/palm.png';
let beachRock = './sprites/resources/rock_beach.png';
let houseBeach = './sprites/house_Beach.png'; 
let towel = './sprites/resources/towel.png';
let towelDown = './sprites/resources/towelDown.png';
const down = './sprites/water/down.png';

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


/**
 * Esta clase define las listas de entidades que componen el mapa de la playa.
 * @author Luis Antonio Expósito Sánchez
 */
export const portal = [
    new Portal(-32, 256, "goBeach", 768, 256),
    new Portal(-32, 288, "goBeach", 768, 288),
    new Portal(-32, 320, "goBeach", 768, 320),
];
export const rocks = [
    new Rock(128, 256, beachRock),
    new Rock(160, 384, beachRock),
    new Rock(256, 192, beachRock),
    new Rock(352, 416, beachRock),
    new Rock(512, 224, beachRock),
    new Rock(704, 352, beachRock)
];

export const trees = [
    new Tree(32, 224, palm), new Tree(64, 250, palm), new Tree(32, 416, palm), new Tree(224, 384, palm), new Tree(320, 352, palm), new Tree(448, 448, palm), new Tree(608, 288, palm), new Tree(672, 416, palm),

    new Tree(0, 512, palm), new Tree(32, 512, palm), new Tree(64, 512, palm), new Tree(96, 512, palm), new Tree(128, 512, palm), new Tree(160, 512, palm), new Tree(192, 512, palm), new Tree(224, 512, palm), new Tree(256, 512, palm),
    new Tree(288, 512, palm), new Tree(320, 512, palm), new Tree(352, 512, palm), new Tree(384, 512, palm), new Tree(416, 512, palm), new Tree(448, 512, palm), new Tree(480, 512, palm), new Tree(512, 512, palm), new Tree(544, 512, palm), new Tree(576, 512, palm),
    new Tree(608, 512, palm), new Tree(640, 512, palm), new Tree(672, 512, palm), new Tree(704, 512, palm), new Tree(736, 512, palm), new Tree(768, 512, palm),

    new Tree(0, 544, palm), new Tree(32, 544, palm), new Tree(64, 544, palm), new Tree(96, 544, palm), new Tree(128, 544, palm), new Tree(160, 544, palm), new Tree(192, 544, palm), new Tree(224, 544, palm), new Tree(256, 544, palm),
    new Tree(288, 544, palm), new Tree(320, 544, palm), new Tree(352, 544, palm), new Tree(384, 544, palm), new Tree(416, 544, palm), new Tree(448, 544, palm), new Tree(480, 544, palm), new Tree(512, 544, palm), new Tree(544, 544, palm), new Tree(576, 544, palm),
    new Tree(608, 544, palm), new Tree(640, 544, palm), new Tree(672, 544, palm), new Tree(704, 544, palm), new Tree(736, 544, palm), new Tree(768, 544, palm),

    new Tree(0, 576, palm), new Tree(32, 576, palm), new Tree(64, 576, palm), new Tree(96, 576, palm), new Tree(128, 576, palm), new Tree(160, 576, palm), new Tree(192, 576, palm), new Tree(224, 576, palm), new Tree(256, 576, palm),
    new Tree(288, 576, palm), new Tree(320, 576, palm), new Tree(352, 576, palm), new Tree(384, 576, palm), new Tree(416, 576, palm), new Tree(448, 576, palm), new Tree(480, 576, palm), new Tree(512, 576, palm), new Tree(544, 576, palm), new Tree(576, 576, palm),
    new Tree(608, 576, palm), new Tree(640, 576, palm), new Tree(672, 576, palm), new Tree(704, 576, palm), new Tree(736, 576, palm), new Tree(768, 576, palm)
];

export const houses = [
    new House(256, 256, houseBeach), // Casa 1
    new House(300, 192, houseBeach), // Casa 2
    new House(512, 320, houseBeach), // Casa 3
];

export const teachers = [
    new WiseMan(736, 224),
    new Miner(128, 350),
    new WoodCutter(600, 448)
];

export const waters = [
    new Water(0, 0), new Water(32, 0), new Water(64, 0), new Water(96, 0), new Water(128, 0), new Water(160, 0), new Water(192, 0), new Water(224, 0), new Water(256, 0),
    new Water(288, 0), new Water(320, 0), new Water(352, 0), new Water(384, 0), new Water(416, 0), new Water(448, 0), new Water(480, 0), new Water(512, 0), new Water(544, 0), new Water(576, 0),
    new Water(608, 0), new Water(640, 0), new Water(672, 0), new Water(704, 0), new Water(736, 0), new Water(768, 0),

    new Water(0, 32), new Water(32, 32), new Water(64, 32), new Water(96, 32), new Water(128, 32), new Water(160, 32), new Water(192, 32), new Water(224, 32), new Water(256, 32),
    new Water(288, 32), new Water(320, 32), new Water(352, 32), new Water(384, 32), new Water(416, 32), new Water(448, 32), new Water(480, 32), new Water(512, 32), new Water(544, 32), new Water(576, 32),
    new Water(608, 32), new Water(640, 32), new Water(672, 32), new Water(704, 32), new Water(736, 32), new Water(768, 32),

    new Water(0, 64), new Water(32, 64), new Water(64, 64), new Water(96, 64), new Water(128, 64), new Water(160, 64), new Water(192, 64), new Water(224, 64), new Water(256, 64),
    new Water(288, 64), new Water(320, 64), new Water(352, 64), new Water(384, 64), new Water(416, 64), new Water(448, 64), new Water(480, 64), new Water(512, 64), new Water(544, 64), new Water(576, 64),
    new Water(608, 64), new Water(640, 64), new Water(672, 64), new Water(704, 64), new Water(736, 64), new Water(768, 64),

    new Water(0, 96), new Water(32, 96), new Water(64, 96), new Water(96, 96), new Water(128, 96), new Water(160, 96), new Water(192, 96), new Water(224, 96), new Water(256, 96),
    new Water(288, 96), new Water(320, 96), new Water(352, 96), new Water(384, 96), new Water(416, 96), new Water(448, 96), new Water(480, 96), new Water(512, 96), new Water(544, 96), new Water(576, 96),
    new Water(608, 96), new Water(640, 96), new Water(672, 96), new Water(704, 96), new Water(736, 96), new Water(768, 96), 

    new Water(0, 128), new Water(32, 128), new Water(64, 128), new Water(96, 128), new Water(128, 128), new Water(160, 128), new Water(192, 128), new Water(224, 128), new Water(256, 128),
    new Water(288, 128), new Water(320, 128), new Water(352, 128), new Water(384, 128), new Water(416, 128), new Water(448, 128), new Water(480, 128), new Water(512, 128), new Water(544, 128), new Water(576, 128),
    new Water(608, 128), new Water(640, 128), new Water(672, 128), new Water(704, 128), new Water(736, 128), new Water(768, 128),

    new Water(0, 160, down), new Water(32, 160, down), new Water(64, 160, down), new Water(96, 160, down), new Water(128, 160, down), new Water(160, 160, down), new Water(192, 160, down), new Water(224, 160, down), new Water(256, 160, down),
    new Water(288, 160, down), new Water(320, 160, down), new Water(352, 160, down), new Water(384, 160, down), new Water(416, 160, down), new Water(448, 160, down), new Water(480, 160, down), new Water(512, 160, down), new Water(544, 160, down), new Water(576, 160, down),
    new Water(608, 160, down), new Water(640, 160, down), new Water(672, 160, down), new Water(704, 160, down), new Water(736, 160, down), new Water(768, 160, down)
];
export const wildGrass = [
    new WildGrass(96, 450, towel, towelDown),
    new WildGrass(128, 192, towel, towelDown),
    new WildGrass(416, 288, towel, towelDown),
    new WildGrass(608, 416, towel, towelDown),
    new WildGrass(640, 224, towel, towelDown),
];
export const bushes = [];
export const floor = [
];

export const beach = {
    grassSpritePath : './sprites/terrain/sand.png',
    portal,
    rocks,
    trees,
    houses,
    teachers,
    waters,
    bushes,
    wildGrass,
    floor
};