//Declaramos las dependencias a usar.
import { Tree } from "../entities/tree.js";
import { Rock } from "../entities/rock.js";
import { House } from "../entities/house.js";
import { WoodCutter } from "../entities/woodcutter.js";
import { WiseMan } from "../entities/wiseman.js";
import { WildGrass } from "../entities/wildGrass.js";
import { Portal } from "../entities/portal.js";
import { Water } from "../entities/water.js";
import { Miner } from "../entities/miner.js";
import { Bush } from "../entities/bush.js";
import { Floor } from "../entities/floor.js";

const down = './sprites/water/down.png';
const up = './sprites/water/up.png';
const left = './sprites/water/left.png';
const right = './sprites/water/right.png';
const downLeft = './sprites/water/downLeft.png';
const downRight = './sprites/water/downRight.png';
const upLeft = './sprites/water/upLeft.png';
const upRight = './sprites/water/upRight.png';

const path = './sprites/terrain/path.png';

/**
 * Esta clase define las listas de entidades que componen el mapa del tutorial.
 * @author Luis Antonio Expósito Sánchez
 */
export const portal = [
    new Portal(768, 288, "grassland", 32, 288),
];
export const rocks = [
];
export const trees = [
    new Tree(0, 0), new Tree(32, 0), new Tree(64, 0), new Tree(96, 0), new Tree(128, 0), new Tree(160, 0), new Tree(192, 0), new Tree(224, 0), new Tree(256, 0), new Tree(288, 0), new Tree(320, 0), new Tree(352, 0), new Tree(384, 0), new Tree(416, 0), new Tree(448, 0), new Tree(480, 0), new Tree(512, 0), new Tree(544, 0), new Tree(576, 0), new Tree(608, 0), new Tree(640, 0), new Tree(672, 0), new Tree(704, 0), new Tree(736, 0), new Tree(768, 0), 
    new Tree(0, 32), new Tree(32, 32), new Tree(64, 32), new Tree(96, 32), new Tree(128, 32), new Tree(160, 32), new Tree(192, 32), new Tree(224, 32), new Tree(256, 32), new Tree(288, 32), new Tree(320, 32), new Tree(352, 32), new Tree(384, 32), new Tree(416, 32), new Tree(448, 32), new Tree(480, 32), new Tree(512, 32), new Tree(544, 32), new Tree(576, 32), new Tree(608, 32), new Tree(640, 32), new Tree(672, 32), new Tree(704, 32), new Tree(736, 32), new Tree(768, 32),
    new Tree(0, 64), new Tree(32, 64), new Tree(736, 64), new Tree(768, 64),
    new Tree(0, 96), new Tree(32, 96), new Tree(736, 96), new Tree(768, 96),
    new Tree(0, 128), new Tree(32, 128), new Tree(736, 128), new Tree(768, 128),
    new Tree(0, 160), new Tree(32, 160), new Tree(736, 160), new Tree(768, 160),
    new Tree(0, 192), new Tree(32, 192), new Tree(736, 192), new Tree(768, 192),
    new Tree(0, 224), new Tree(32, 224), new Tree(736, 224), new Tree(768, 224),
    new Tree(0, 256), new Tree(32, 256), new Tree(736, 256), new Tree(768, 256),
    new Tree(0, 288), new Tree(32, 288), 
    new Tree(0, 320), new Tree(32, 320), new Tree(736, 320), new Tree(768, 320),
    new Tree(0, 352), new Tree(32, 352), new Tree(736, 352), new Tree(768, 352),
    new Tree(0, 384), new Tree(32, 384), new Tree(736, 384), new Tree(768, 384),
    new Tree(0, 416), new Tree(32, 416), new Tree(736, 416), new Tree(768, 416),
    new Tree(0, 448), new Tree(32, 448), new Tree(736, 448), new Tree(768, 448),
    new Tree(0, 480), new Tree(32, 480), new Tree(736, 480), new Tree(768, 480),
    new Tree(0, 512), new Tree(32, 512), new Tree(736, 512), new Tree(768, 512),
    new Tree(0, 544), new Tree(32, 544), new Tree(64, 544), new Tree(96, 544), new Tree(128, 544), new Tree(160, 544), new Tree(192, 544), new Tree(224, 544), new Tree(256, 544), new Tree(288, 544), new Tree(320, 544), new Tree(352, 544), new Tree(384, 544), new Tree(416, 544), new Tree(448, 544), new Tree(480, 544), new Tree(512, 544), new Tree(544, 544), new Tree(576, 544), new Tree(608, 544), new Tree(640, 544), new Tree(672, 544), new Tree(704, 544), new Tree(736, 544), new Tree(768, 544),
    new Tree(0, 576), new Tree(32, 576), new Tree(64, 576), new Tree(96, 576), new Tree(128, 576), new Tree(160, 576), new Tree(192, 576), new Tree(224, 576), new Tree(256, 576), new Tree(288, 576), new Tree(320, 576), new Tree(352, 576), new Tree(384, 576), new Tree(416, 576), new Tree(448, 576), new Tree(480, 576), new Tree(512, 576), new Tree(544, 576), new Tree(576, 576), new Tree(608, 576), new Tree(640, 576), new Tree(672, 576), new Tree(704, 576), new Tree(736, 576), new Tree(768, 576),
];
export const houses = [
    new House(288, 192), new House(288, 352),
    new House(448, 192), new House(448, 352)
];
export const teachers = [
    new WiseMan(384, 288),
    new WoodCutter(384, 352), 
    new Miner(384, 224),
];
export const waters = [
];
export const wildGrass = [
];
export const bushes = [

];
export const floor = [
    new Floor(352,256, path), new Floor(384,256, path), new Floor(416,256, path),
    new Floor(352,288, path), new Floor(384,288, path), new Floor(416,288, path), new Floor(448,288, path), new Floor(480,288, path), new Floor(512,288, path), new Floor(544,288, path), new Floor(576,288, path), new Floor(608,288, path), new Floor(640,288, path), new Floor(672,288, path), new Floor(704,288, path), new Floor(736,288, path), new Floor(768,288, path),
    new Floor(352,320, path), new Floor(384,320, path), new Floor(416,320, path),
];


const img = new Image();
img.src = './sprites/resources/wildGrass.png';
img.onload = () => console.log("Imagen cargada correctamente");
img.onerror = () => console.log("Error al cargar la imagen");

export const tutorial = {
    grassSpritePath : './sprites/terrain/grass.png',
    trees,
    rocks,
    houses,
    teachers,
    waters,
    wildGrass,
    bushes,
    portal,
    floor
};
