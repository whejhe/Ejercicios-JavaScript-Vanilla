//Declaramos las dependencias a usar.
import { Tree } from "../entities/tree.js";
import { Rock } from "../entities/rock.js";
import { House } from "../entities/house.js";
import { WoodCutter } from "../entities/woodcutter.js";
import { WiseMan } from "../entities/wiseman.js";
import { WildGrass } from "../entities/wildGrass.js";
import { Portal } from "../entities/portal.js";
import { Water } from "../entities/water.js";
import { Bush } from "../entities/bush.js";
import { Floor } from "../entities/floor.js";

const cactus = './sprites/resources/tree-cactus.png'; 
const houseDesert = './sprites/houseDesert.png'; 
const wild = "./sprites/resources/wildDesert.png";
const wildDown = "./sprites/resources/wildDesertDown.png";

/**
 * Esta clase define las listas de entidades que componen el mapa del tutorial.
 * @author Luis Antonio Expósito Sánchez
 */
export const portal = [
    new Portal(400, 160, "beach"), 
    new Portal(128, 340, "snow"),
]

export const rocks = [
    new Rock(160, 128),
    new Rock(576, 128),
    new Rock(608, 160)
];

export const trees = [
    new Tree(0, 0,cactus), new Tree(0, 32,cactus), new Tree(0, 64,cactus), new Tree(0, 96,cactus), new Tree(0, 128,cactus), new Tree(0, 160,cactus), new Tree(0, 192,cactus), new Tree(0, 224,cactus), new Tree(0, 256,cactus), new Tree(0, 288,cactus), new Tree(0, 320,cactus), new Tree(0, 352,cactus), new Tree(0, 384,cactus), new Tree(0, 416,cactus), new Tree(0, 448,cactus), new Tree(0, 480,cactus), new Tree(0, 512,cactus), new Tree(0, 544,cactus), new Tree(0, 576,cactus), new Tree(0, 608,cactus),
    new Tree(32, 0,cactus), new Tree(32, 32,cactus), new Tree(32, 64,cactus), new Tree(32, 96,cactus), new Tree(32, 128,cactus), new Tree(32, 160,cactus), new Tree(32, 192,cactus), new Tree(32, 224,cactus), new Tree(32, 256,cactus), new Tree(32, 288,cactus), new Tree(32, 320,cactus), new Tree(32, 352,cactus), new Tree(32, 384,cactus), new Tree(32, 416,cactus), new Tree(32, 448,cactus), new Tree(32, 480,cactus), new Tree(32, 512,cactus), new Tree(32, 544,cactus), new Tree(32, 576,cactus), new Tree(32, 608,cactus),
    new Tree(64, 0,cactus), new Tree(64, 32,cactus), new Tree(64, 64,cactus), new Tree(64, 96,cactus), new Tree(64, 128,cactus), new Tree(64, 160,cactus), new Tree(64, 192,cactus), new Tree(64, 224,cactus), new Tree(64, 256,cactus), new Tree(64, 288,cactus), new Tree(64, 320,cactus), new Tree(64, 352,cactus), new Tree(64, 384,cactus), new Tree(64, 416,cactus), new Tree(64, 448,cactus), new Tree(64, 480,cactus), new Tree(64, 512,cactus), new Tree(64, 544,cactus), new Tree(64, 576,cactus), new Tree(64, 608,cactus),
    new Tree(96, 0,cactus), new Tree(96, 32,cactus), new Tree(96, 64,cactus), new Tree(96, 96,cactus), new Tree(96, 128,cactus), new Tree(96, 544,cactus), new Tree(96, 576,cactus), new Tree(96, 608,cactus),
    new Tree(128, 32,cactus), new Tree(128, 64,cactus), new Tree(128, 544,cactus), new Tree(128, 576,cactus), new Tree(128, 608,cactus),
    new Tree(160, 32,cactus), new Tree(160, 64,cactus), new Tree(160, 544,cactus), new Tree(160, 576,cactus), new Tree(160, 608,cactus),
    new Tree(192, 32,cactus), new Tree(192, 64,cactus), new Tree(192, 544,cactus), new Tree(192, 576,cactus), new Tree(192, 608,cactus),
    new Tree(224, 32,cactus), new Tree(224, 64,cactus), new Tree(224, 96,cactus), new Tree(224, 128,cactus), new Tree(224, 544,cactus), new Tree(224, 576,cactus), new Tree(224, 608,cactus),
    new Tree(256, 32,cactus), new Tree(256, 64,cactus), new Tree(256, 96,cactus), new Tree(256, 544,cactus), new Tree(256, 576,cactus), new Tree(256, 608,cactus),
    new Tree(288, 32,cactus), new Tree(288, 64,cactus), new Tree(288, 96,cactus), new Tree(288, 544,cactus), new Tree(288, 576,cactus), new Tree(288, 608,cactus),
    new Tree(320, 32,cactus), new Tree(320, 64,cactus), new Tree(320, 96,cactus), new Tree(320, 544,cactus), new Tree(320, 576,cactus), new Tree(320, 608,cactus),
    new Tree(352, 0,cactus), new Tree(352, 32,cactus), new Tree(352, 64,cactus), new Tree(352, 96,cactus), new Tree(352, 128,cactus), new Tree(352, 544,cactus), new Tree(352, 576,cactus), new Tree(352, 608,cactus),
    new Tree(384, 0,cactus), new Tree(384, 32,cactus), new Tree(384, 64,cactus), new Tree(384, 96,cactus), new Tree(384, 128,cactus), new Tree(384, 544,cactus), new Tree(384, 576,cactus), new Tree(384, 608,cactus),
    new Tree(416, 0,cactus), new Tree(416, 32,cactus), new Tree(416, 64,cactus), new Tree(416, 96,cactus), new Tree(416, 128,cactus), new Tree(416, 544,cactus), new Tree(416, 576,cactus), new Tree(416, 608,cactus),
    new Tree(448, 0,cactus), new Tree(448, 32,cactus), new Tree(448, 64,cactus), new Tree(448, 544,cactus), new Tree(448, 576,cactus), new Tree(448, 608,cactus),
    new Tree(480, 0,cactus), new Tree(480, 32,cactus), new Tree(480, 64,cactus), new Tree(480, 544,cactus), new Tree(480, 576,cactus), new Tree(480, 608,cactus),
    new Tree(512, 0,cactus), new Tree(512, 32,cactus), new Tree(512, 64,cactus), new Tree(512, 544,cactus), new Tree(512, 576,cactus), new Tree(512, 608,cactus),
    new Tree(544, 0,cactus), new Tree(544, 32,cactus), new Tree(544, 64,cactus), new Tree(544, 544,cactus), new Tree(544, 576,cactus), new Tree(544, 608,cactus),
    new Tree(576, 0,cactus), new Tree(576, 32,cactus), new Tree(576, 64,cactus), new Tree(576, 544,cactus), new Tree(576, 576,cactus), new Tree(576, 608,cactus),
    new Tree(608, 0,cactus), new Tree(608, 32,cactus), new Tree(608, 64,cactus), new Tree(608, 544,cactus), new Tree(608, 576,cactus), new Tree(608, 608,cactus),
    new Tree(640, 0,cactus), new Tree(640, 32,cactus), new Tree(640, 64,cactus), new Tree(640, 544,cactus), new Tree(640, 576,cactus), new Tree(640, 608,cactus),
    new Tree(672, 0,cactus), new Tree(672, 32,cactus), new Tree(672, 64,cactus), new Tree(672, 96,cactus), new Tree(672, 544,cactus), new Tree(672, 576,cactus), new Tree(672, 608,cactus),
    new Tree(704, 0,cactus), new Tree(704, 32,cactus), new Tree(704, 64,cactus), new Tree(704, 96,cactus), new Tree(704, 544,cactus), new Tree(704, 576,cactus), new Tree(704, 608,cactus),
    new Tree(736, 0,cactus), new Tree(736, 32,cactus), new Tree(736, 64,cactus), new Tree(736, 96,cactus), new Tree(736, 128,cactus), new Tree(736, 160,cactus), new Tree(736, 192,cactus), new Tree(736, 224,cactus), new Tree(736, 256,cactus), new Tree(736, 288,cactus), new Tree(736, 320,cactus), new Tree(736, 352,cactus), new Tree(736, 384,cactus), new Tree(736, 416,cactus), new Tree(736, 448,cactus), new Tree(736, 480,cactus), new Tree(736, 512,cactus), new Tree(736, 544,cactus), new Tree(736, 576,cactus), new Tree(736, 608,cactus),
    new Tree(768, 0,cactus), new Tree(768, 32,cactus), new Tree(768, 64,cactus), new Tree(768, 96,cactus), new Tree(768, 128,cactus), new Tree(768, 160,cactus), new Tree(768, 192,cactus), new Tree(768, 224,cactus), new Tree(768, 256,cactus), new Tree(768, 288,cactus), new Tree(768, 320,cactus), new Tree(768, 352,cactus), new Tree(768, 384,cactus), new Tree(768, 416,cactus), new Tree(768, 448,cactus), new Tree(768, 480,cactus), new Tree(768, 512,cactus), new Tree(768, 544,cactus), new Tree(768, 576,cactus), new Tree(768, 608,cactus),
    new Tree(800, 0,cactus), new Tree(800, 32,cactus), new Tree(800, 64,cactus), new Tree(800, 96,cactus), new Tree(800, 128,cactus), new Tree(800, 160,cactus), new Tree(800, 192,cactus), new Tree(800, 224,cactus), new Tree(800, 256,cactus), new Tree(800, 288,cactus), new Tree(800, 320,cactus), new Tree(800, 352,cactus), new Tree(800, 384,cactus), new Tree(800, 416,cactus), new Tree(800, 448,cactus), new Tree(800, 480,cactus), new Tree(800, 512,cactus), new Tree(800, 544,cactus), new Tree(800, 576,cactus), new Tree(800, 608,cactus),
];

export const houses = [
    new House(200, 200, houseDesert), // Casa 1
    new House(320, 200, houseDesert), // Casa 2
    new House(440, 200, houseDesert), // Casa 3
    new House(440, 320, houseDesert), // Casa 5
    new House(200, 440, houseDesert), // Casa 6
    new House(320, 440, houseDesert), // Casa 7
];
export const teachers = [
    new WoodCutter(550, 350),
    new WiseMan(440,440)
];

export const waters = [
    new Water(288, 320), new Water(288, 352), new Water(288, 384),
    new Water(320, 320), new Water(320, 352), new Water(320, 384),
    new Water(352, 320), new Water(352, 352), new Water(352, 384)
];

export const wildGrass = [
    new WildGrass(150, 100, wild, wildDown),
    new WildGrass(500, 100, wild, wildDown),
    new WildGrass(700, 250, wild, wildDown),
    new WildGrass(300, 280, wild, wildDown),
    new WildGrass(400, 250, wild, wildDown),
    new WildGrass(600, 500, wild, wildDown),
    new WildGrass(100, 500, wild, wildDown),
];
export const bushes = [];
export const floor = [
];


const img = new Image();
img.src = './sprites/resources/wildGrass.png';
img.onload = () => console.log("Imagen cargada correctamente");
img.onerror = () => console.log("Error al cargar la imagen");


export const desert = {
    grassSpritePath : './sprites/terrain/desert.png',
    portal,
    rocks,
    trees,
    houses,
    bushes,
    teachers,
    wildGrass,
    floor
};