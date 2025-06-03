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
const upLeftReverse1 = './sprites/water/reverse1-upLeft.png';

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
const upLeftReverse2 = './sprites/water/reverse2-upLeft.png';

const path = './sprites/terrain/path.png';

/**
 * Esta clase define las listas de entidades que componen el mapa del tutorial.
 * @author Luis Antonio Expósito Sánchez
 */
export const portal = [
    new Portal (384, 0, "grassland", 384, 544),
];

export const trees = [
    new Tree(0, 0),new Tree(32, 0),new Tree(64, 0),new Tree(96, 0),new Tree(128, 0),new Tree(160, 0),new Tree(192, 0),new Tree(224, 0),new Tree(256, 0),new Tree(288, 0),new Tree(320, 0),new Tree(352, 0),new Tree(416, 0),new Tree(448, 0),new Tree(480, 0),new Tree(512, 0),new Tree(544, 0),new Tree(576, 0),new Tree(608, 0),new Tree(640, 0),new Tree(672, 0),new Tree(704, 0),new Tree(736, 0),
// Ultima fila eje Y (576)
new Tree(0, 576),new Tree(32, 576),new Tree(64, 576),new Tree(96, 576),new Tree(128, 576),new Tree(160, 576),new Tree(192, 576),new Tree(224, 576),new Tree(256, 576),new Tree(288, 576),new Tree(320, 576),new Tree(352, 576),new Tree(384, 576),new Tree(416, 576),new Tree(448, 576),new Tree(480, 576),new Tree(512, 576),new Tree(544, 576),new Tree(576, 576),new Tree(608, 576),new Tree(640, 576),new Tree(672, 576),new Tree(704, 576),new Tree(736, 576),new Tree(768, 576),
// 4 Fila por abajo eje Y (480)
new Tree (0, 480),new Tree (32, 480),new Tree (64, 480),new Tree (96, 480),new Tree (128, 480),new Tree (160, 480),new Tree (192, 480),new Tree (224, 480),new Tree (256, 480),new Tree (288, 480),new Tree (320, 480),new Tree (352, 480),new Tree (384, 480),new Tree (416, 480),new Tree (448, 480),new Tree (480, 480),new Tree (512, 480),new Tree (544, 480),new Tree (576, 480),new Tree (608, 480),new Tree (640, 480),new Tree (672, 480),new Tree (704, 480),new Tree (736, 480),

new Tree(0, 448),new Tree(32, 448),new Tree(64, 448),new Tree(96, 448),new Tree(128, 448),new Tree(160, 448),new Tree(192, 448),new Tree(224, 448),new Tree(256, 448),new Tree(288, 448),new Tree(320, 448),new Tree(352, 448),new Tree(384, 448),new Tree(416, 448),new Tree(448, 448),new Tree(480, 448),new Tree(512, 448),new Tree(544, 448),new Tree(576, 448),new Tree(608, 448),new Tree(640, 448),new Tree(672, 448),new Tree(704, 448),new Tree(736, 448),

new Tree (0, 416),new Tree (32, 416),new Tree (64, 416),new Tree (96, 416),new Tree (128, 416),new Tree (160, 416),new Tree (608, 416),new Tree (640, 416),new Tree (672, 416),new Tree (704, 416),new Tree (736, 416),

new Tree(0, 384),new Tree(32, 384),new Tree(64, 384),new Tree(96, 384),new Tree(128, 384),new Tree(640, 384),new Tree(672, 384),new Tree(704, 384),new Tree(736, 384),
];

export const bushes = [];


export const waters = [
// Penultima fila eje Y (544)
new Water(0, 544, [down1, down2]),new Water(32, 544, [down1, down2]),new Water(64, 544, [down1, down2]),new Water(96, 544, [down1, down2]),new Water(128, 544, [down1, down2]),new Water(160, 544, [down1, down2]),new Water(192, 544, [down1, down2]),new Water(224, 544, [down1, down2]),new Water(256, 544, [down1, down2]),new Water(288, 544, [down1, down2]),new Water(320, 544, [down1, down2]),new Water(352, 544, [down1, down2]),new Water(384, 544, [down1, down2]),new Water(416, 544, [down1, down2]),new Water(448, 544, [down1, down2]),new Water(480, 544, [down1, down2]),new Water(512, 544, [down1, down2]),new Water(544, 544, [down1, down2]),new Water(576, 544, [down1, down2]),new Water(608, 544, [down1, down2]),new Water(640, 544, [down1, down2]),new Water(672, 544, [down1, down2]),new Water(704, 544, [down1, down2]),new Water(736, 544, [down1, down2]),new Water(768, 544, [down1, down2]),
// 3 Fila por abajo eje Y (512)
new Water(0, 512, [up1, up2]),new Water(32, 512, [up1, up2]),new Water(64, 512, [up1, up2]),new Water(96, 512, [up1, up2]),new Water(128, 512, [up1, up2]),new Water(160, 512, [up1, up2]),new Water(192, 512, [up1, up2]),new Water(224, 512, [up1, up2]),new Water(256, 512, [up1, up2]),new Water(288, 512, [up1, up2]),new Water(320, 512, [up1, up2]),new Water(352, 512, [up1, up2]),new Water(384, 512, [up1, up2]),new Water(416, 512, [up1, up2]),new Water(448, 512, [up1, up2]),new Water(480, 512, [up1, up2]),new Water(512, 512, [up1, up2]),new Water(544, 512, [up1, up2]),new Water(576, 512, [up1, up2]),new Water(608, 512, [up1, up2]),new Water(640, 512, [up1, up2]),new Water(672, 512, [up1, up2]),new Water(704, 512, [up1, up2]),new Water(736, 512, [up1, up2]),new Water(768, 512, [upLeftReverse1, upLeftReverse2]),


//Limite Mapa
// new Water(0, -32, [left1, left2]),new Water(32, -32, [left1, left2]),new Water(64, -32, [left1, left2]),new Water(96, -32, [left1, left2]),new Water(128, -32, [left1, left2]),new Water(160, -32, [left1, left2]),new Water(192, -32, [left1, left2]),new Water(224, -32, [left1, left2]),new Water(256, -32, [left1, left2]),new Water(288, -32, [left1, left2]),new Water(320, -32, [left1, left2]),new Water(352, -32, [left1, left2]),new Water(384, -32, [left1, left2]),new Water(416, -32, [left1, left2]),new Water(448, -32, [left1, left2]),new Water(480, -32, [left1, left2]),new Water(512, -32, [left1, left2]),new Water(544, -32, [left1, left2]),new Water(576, -32, [left1, left2]),new Water(608, -32, [left1, left2]),new Water(640, -32, [left1, left2]),new Water(672, -32, [left1, left2]),new Water(704, -32, [left1, left2]),new Water(736, -32, [left1, left2]),new Water(768, -32, [left1, left2]),
new Water(768, 0, [left1, left2]),new Water(768, 32, [left1, left2]),new Water(768, 64, [left1, left2]),new Water(768, 96, [left1, left2]),new Water(768, 128, [left1, left2]),new Water(768, 160, [left1, left2]),new Water(768, 192, [left1, left2]),new Water(768, 224, [left1, left2]),new Water(768, 256, [left1, left2]),new Water(768, 288, [left1, left2]),new Water(768, 320, [left1, left2]),new Water(768, 352, [left1, left2]),new Water(768, 384, [left1, left2]),new Water(768, 416, [left1, left2]),new Water(768, 448, [left1, left2]),new Water(768, 480, [left1, left2]),
];

export const rocks = [
/*new Rock(224,256),new Rock(224, 288)*/new Rock(224,320),/*new Rock(224,352)*/
/*new Rock(256,256)*/new Rock(256, 288),new Rock(256,320),new Rock(256,352),
new Rock(288,256),new Rock(288, 288),new Rock(288,320),new Rock(288,352),
new Rock(320,256),new Rock(320, 288),new Rock(320,320),new Rock(320,352),
new Rock(352,256),new Rock(352, 288),new Rock(352,320),new Rock(352,352),
new Rock(384,256),new Rock(384, 288),new Rock(384,320),new Rock(384,352),
new Rock(416,256),new Rock(416, 288),new Rock(416,320),new Rock(416,352),
new Rock(448,256),new Rock(448, 288),new Rock(448,320),new Rock(448,352),
new Rock(480,256),new Rock(480, 288),new Rock(480,320),new Rock(480,352),
/*new Rock(512,256)*/new Rock(512, 288),new Rock(512,320),new Rock(512,352),
/*new Rock(544,256),new Rock(544, 288)*/new Rock(544,320),/*new Rock(544,352)*/
];

export const teachers = [
    new Miner(544, 288)
];

export const houses = [
    new House(0, 32),
    new House(0, 96),
    new House(0, 160),
    new House(0, 224),
    new House(0, 288),
    new House(0, 352),
];

export const wildGrass = [
new WildGrass(96, 128),new WildGrass(128, 128),new WildGrass(160, 128),new WildGrass(192, 128),new WildGrass(224, 128),new WildGrass(256, 128),new WildGrass(288, 128),new WildGrass(352, 128),new WildGrass(384, 128),new WildGrass(416, 128),new WildGrass(448, 128),new WildGrass(480, 128),new WildGrass(512, 128),new WildGrass(544, 128),new WildGrass(576, 128),new WildGrass(608, 128),new WildGrass(640, 128),new WildGrass(704, 128),new WildGrass(736, 128),

new WildGrass (64, 160),new WildGrass (128, 160),new WildGrass (160, 160),new WildGrass (192, 160),new WildGrass (224, 160),new WildGrass (288, 160),new WildGrass (320, 160),new WildGrass (352, 160),new WildGrass (416, 160),new WildGrass (448, 160),new WildGrass (480, 160),new WildGrass (512, 160),new WildGrass (544, 160),new WildGrass (576, 160),new WildGrass (608, 160),new WildGrass (640, 160),new WildGrass (672, 160),new WildGrass (704, 160),

new WildGrass (96, 192),new WildGrass (160, 192),new WildGrass (192, 192),new WildGrass (224, 192),new WildGrass (288, 192),new WildGrass (352, 192),new WildGrass (384, 192),new WildGrass (416, 192),new WildGrass (448, 192),new WildGrass (480, 192),new WildGrass (512, 192),new WildGrass (544, 192),new WildGrass (576, 192),new WildGrass (608, 192),new WildGrass (640, 192),new WildGrass (672, 192),new WildGrass (704, 192),new WildGrass (736, 192),


];
export const floor = [
    new Floor(384,0,path), new Floor(384,32,path), new Floor(384,64,path), new Floor(384,96,path), new Floor(384,128,path), new Floor(384,160,path), new Floor(384,192,path), new Floor(384,224,path), 
];

const img = new Image();
img.src = './sprites/resources/wildGrass.png';
img.onload = () => console.log("Imagen cargada correctamente");
img.onerror = () => console.log("Error al cargar la imagen");

export const rockyfield = {
    grassSpritePath : './sprites/terrain/grass.png',
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
