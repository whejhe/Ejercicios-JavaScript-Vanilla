//Declaramos las dependencias a usar.
import { Tree } from "../entities/tree.js";
import { Rock } from "../entities/rock.js";
import { House } from "../entities/house.js";
import { WoodCutter } from "../entities/woodcutter.js";
import { WiseMan } from "../entities/wiseman.js";
import { Miner } from "../entities/miner.js";
import { Portal } from "../entities/portal.js";
import { WildGrass } from "../entities/wildGrass.js";
import { Bush } from "../entities/bush.js";
import { Floor } from "../entities/floor.js";
import { Water } from "../entities/water.js";

const tree_snow = "./sprites/resources/tree_snow.png";
const rock_snow = "./sprites/resources/rock_snow.png";
const house_snow = "./sprites/house_snow.png";
const wild = "./sprites/resources/wildGrass_snow.png";
const wildDown = "./sprites/resources/wildGrassDown_snow.png";
const bush_snow = "./sprites/resources/bush_snow.png";
const path_snow = "./sprites/terrain/path_snow.png";
const path = "./sprites/terrain/path.png";
const path_toSnow = "./sprites/terrain/path_toSnow.png";
const grass_toSnow = "./sprites/terrain/grass_toSnow.png";

const down = './sprites/water/down.png';
const up = './sprites/water/up.png';
const left = './sprites/water/left.png';
const right = './sprites/water/right.png';
const downLeft = './sprites/water/downLeft.png';
const downRight = './sprites/water/downRight.png';
const upLeft = './sprites/water/upLeft.png';
const upRight = './sprites/water/upRight.png';

/**
 * Esta clase define las listas de entidades que componen el mapa de la nieve.
 * @author Luis Antonio Expósito Sánchez
 */
export const bushes = [
    new Bush(320, 160),
    new Bush(320, 192),
    new Bush(608, 224), new Bush(640, 224),
    new Bush(704, 256),
    new Bush(704, 288),
    new Bush(704, 320),
    new Bush(128, 352), new Bush(160, 352), new Bush(384, 352), new Bush(416, 352),
    new Bush(544, 416),
    new Bush(544, 448),
    new Bush(384, 480, bush_snow)
];

export const floor = [
    new Floor(608, 128, path), new Floor(640, 128, path),
    new Floor(160, 160, path), new Floor(192, 160, path), new Floor(224, 160, path), new Floor(256, 160, path), new Floor(288, 160, path), new Floor(320, 160, path), new Floor(352, 160, path), new Floor(384, 160, path), new Floor(416, 160, path), new Floor(512, 160, path), new Floor(544, 160, path), new Floor(576, 160, path), new Floor(608, 160, path), new Floor(640, 160, path), 
    new Floor(160, 192, path), new Floor(192, 192, path), new Floor(224, 192, path), new Floor(256, 192, path), new Floor(288, 192, path), new Floor(320, 192, path), new Floor(352, 192, path), new Floor(384, 192, path), new Floor(416, 192, path), new Floor(608, 192, path), new Floor(640, 192, path),
    new Floor(160, 224, path), new Floor(192, 224, path), new Floor(384, 224, path), new Floor(416, 224, path), new Floor(608, 224, path), new Floor(640, 224, path),
    new Floor(32, 256, path), new Floor(64, 256, path), new Floor(96, 256, path), new Floor(128, 256, path), new Floor(160, 256, path), new Floor(192, 256, path), new Floor(384, 256, path), new Floor(416, 256, path), new Floor(608, 256, path), new Floor(640, 256, path), new Floor(672, 256, path), new Floor(704, 256, path), new Floor(736, 256, path), 
    new Floor(0, 288, path), new Floor(32, 288, path), new Floor(64, 288, path), new Floor(96, 288, path), new Floor(128, 288, path), new Floor(160, 288, path), new Floor(192, 288, path), new Floor(384, 288, path), new Floor(416, 288, path), new Floor(608, 288, path), new Floor(640, 288, path), new Floor(672, 288, path), new Floor(704, 288, path), new Floor(736, 288, path), new Floor(768, 288, path),
    new Floor(32, 320, path), new Floor(64, 320, path), new Floor(96, 320, path), new Floor(128, 320, path), new Floor(160, 320, path), new Floor(192, 320, path), new Floor(384, 320, path), new Floor(416, 320, path), new Floor(608, 320, path), new Floor(640, 320, path), new Floor(672, 320, path), new Floor(704, 320, path), new Floor(736, 320, path), 
    new Floor(128, 352, path), new Floor(160, 352, path), new Floor(384, 352, path), new Floor(416, 352, path), new Floor(608, 352, path), new Floor(640, 352, path),
    new Floor(128, 384, path), new Floor(160, 384, path), new Floor(384, 384, path), new Floor(416, 384, path), new Floor(608, 384, path), new Floor(640, 384, path),
    new Floor(128, 416, path), new Floor(160, 416, path), new Floor(352, 416, grass_toSnow), new Floor(384, 416, path_toSnow), new Floor(416, 416, path_toSnow), new Floor(448, 416, path), new Floor(480, 416, path), new Floor(512, 416, path), new Floor(544, 416, path), new Floor(576, 416, path), new Floor(608, 416, path), new Floor(640, 416, path),
    new Floor(128, 448, path), new Floor(160, 448, path), new Floor(320, 448, grass_toSnow), new Floor(352, 448, grass_toSnow), new Floor(384, 448, path_toSnow), new Floor(416, 448, path_toSnow), new Floor(448, 448, path_toSnow), new Floor(480, 448, path), new Floor(512, 448, path), new Floor(544, 448, path), new Floor(576, 448, path), new Floor(608, 448, path), new Floor(640, 448, path),
    new Floor(64, 480, path), new Floor(96, 480, path), new Floor(128, 480, path), new Floor(160, 480, path), new Floor(192, 480, path), new Floor(224, 480, path), new Floor(288, 480, grass_toSnow), new Floor(320, 480, grass_toSnow), new Floor(352, 480, grass_toSnow), new Floor(384, 480, path_toSnow), new Floor(416, 480, grass_toSnow), new Floor(448, 480, grass_toSnow), new Floor(480, 480, grass_toSnow),
    new Floor(64, 512, path), new Floor(96, 512, path), new Floor(128, 512, path), new Floor(160, 512, path), new Floor(192, 512, path), new Floor(224, 512, path), new Floor(256, 512, grass_toSnow), new Floor(288, 512, grass_toSnow), new Floor(320, 512, grass_toSnow), new Floor(352, 512, grass_toSnow), new Floor(384, 512, path_toSnow), new Floor(416, 512, grass_toSnow), new Floor(448, 512, grass_toSnow), new Floor(480, 512, grass_toSnow), new Floor(512, 512, grass_toSnow),
    new Floor(64, 544, path), new Floor(96, 544, path), new Floor(128, 544, path), new Floor(160, 544, path), new Floor(192, 544, path), new Floor(224, 544, path_toSnow), new Floor(256, 544, grass_toSnow), new Floor(288, 544, grass_toSnow), new Floor(320, 544, grass_toSnow), new Floor(352, 544, grass_toSnow), new Floor(384, 544, path_toSnow), new Floor(416, 544, grass_toSnow), new Floor(448, 544, grass_toSnow), new Floor(480, 544, grass_toSnow), new Floor(512, 544, grass_toSnow), new Floor(544, 544, grass_toSnow),
    new Floor(192, 576, grass_toSnow), new Floor(224, 576, grass_toSnow), new Floor(256, 576, grass_toSnow), new Floor(288, 576, grass_toSnow), new Floor(320, 576, grass_toSnow), new Floor(352, 576, grass_toSnow), new Floor(384, 576, path_toSnow), new Floor(416, 576, grass_toSnow), new Floor(448, 576, grass_toSnow), new Floor(480, 576, grass_toSnow), new Floor(512, 576, grass_toSnow), new Floor(544, 576, grass_toSnow), new Floor(576, 576, grass_toSnow), 
];
export const portal = [
    new Portal(0, 288, "rockyfield", 736, 288),
    new Portal(768, 288, "town", 32, 288),
    new Portal(384, 576, "icevalley", 384, 32),
];
export const rocks = [
    new Rock(320, 352),
    new Rock(288, 384), new Rock(320, 384),
    new Rock(32, 448), new Rock(64, 448), new Rock(96, 448), new Rock(192, 448), new Rock(224, 448), new Rock(256, 448),
    new Rock(32, 480), new Rock(256, 480),
    new Rock(32, 512), new Rock(256, 512, rock_snow),
    new Rock(32, 544), new Rock(256, 544, rock_snow),
    new Rock(32, 576), new Rock(64, 576), new Rock(96, 576), new Rock(128, 576), new Rock(160, 576), new Rock(192, 576, rock_snow), new Rock(224, 576, rock_snow), new Rock(256, 576, rock_snow),
];
export const trees = [
    new Tree(0, 0), new Tree(32, 0), new Tree(64, 0), new Tree(96, 0), new Tree(128, 0), new Tree(160, 0), new Tree(192, 0), new Tree(224, 0), new Tree(256, 0), new Tree(288, 0), new Tree(320, 0), new Tree(352, 0), new Tree(384, 0), new Tree(416, 0), new Tree(448, 0), new Tree(480, 0), new Tree(512, 0), new Tree(544, 0), new Tree(576, 0), new Tree(608, 0), new Tree(640, 0), new Tree(672, 0), new Tree(704, 0), new Tree(736, 0), new Tree(768, 0),
    new Tree(0, 32), new Tree(32, 32), new Tree(512, 32), new Tree(544, 32), new Tree(576, 32), new Tree(608, 32), new Tree(640, 32), new Tree(672, 32), new Tree(704, 32), new Tree(736, 32), new Tree(768, 32),
    new Tree(0, 64), new Tree(32, 64), new Tree(512, 64), new Tree(544, 64), new Tree(576, 64), new Tree(608, 64), new Tree(640, 64), new Tree(672, 64), new Tree(704, 64), new Tree(736, 64), new Tree(768, 64),
    new Tree(0, 96), new Tree(32, 96), new Tree(576, 96), new Tree(608, 96), new Tree(640, 96), new Tree(672, 96), new Tree(704, 96), new Tree(736, 96), new Tree(768, 96),
    new Tree(0, 128), new Tree(32, 128), new Tree(64, 128), new Tree(96, 128), new Tree(128, 128), new Tree(160, 128), new Tree(192, 128), new Tree(224, 128), new Tree(256, 128), new Tree(288, 128), new Tree(320, 128), new Tree(352, 128), new Tree(384, 128), new Tree(416, 128), new Tree(448, 128), new Tree(480, 128), new Tree(576, 128), new Tree(672, 128), new Tree(704, 128), new Tree(736, 128), new Tree(768, 128),
    new Tree(0, 160), new Tree(32, 160), new Tree(64, 160), new Tree(96, 160), new Tree(128, 160), new Tree(448, 160), new Tree(480, 160), new Tree(672, 160), new Tree(704, 160), new Tree(736, 160), new Tree(768, 160),
    new Tree(0, 192), new Tree(32, 192), new Tree(64, 192), new Tree(96, 192), new Tree(128, 192), new Tree(448, 192), new Tree(480, 192), new Tree(512, 192), new Tree(544, 192), new Tree(576, 192), new Tree(672, 192), new Tree(704, 192), new Tree(736, 192), new Tree(768, 192),
    new Tree(0, 224), new Tree(32, 224), new Tree(64, 224), new Tree(96, 224), new Tree(128, 224), new Tree(224, 224), new Tree(256, 224), new Tree(288, 224), new Tree(320, 224), new Tree(352, 224), new Tree(448, 224), new Tree(480, 224), new Tree(512, 224), new Tree(544, 224), new Tree(576, 224), new Tree(672, 224), new Tree(704, 224), new Tree(736, 224), new Tree(768, 224),
    new Tree(0, 256), new Tree(224, 256), new Tree(256, 256), new Tree(288, 256), new Tree(320, 256), new Tree(352, 256), new Tree(448, 256), new Tree(480, 256), new Tree(576, 256), new Tree(768, 256),
    new Tree(224, 288), new Tree(256, 288), new Tree(288, 288), new Tree(320, 288), new Tree(352, 288), new Tree(448, 288), new Tree(480, 288), new Tree(576, 288),
    new Tree(0, 320), new Tree(224, 320), new Tree(352, 320), new Tree(448, 320), new Tree(480, 320), new Tree(576, 320), new Tree(768, 320),
    new Tree(0, 352), new Tree(32, 352), new Tree(64, 352), new Tree(96, 352), new Tree(192, 352), new Tree(224, 352), new Tree(352, 352), new Tree(448, 352), new Tree(480, 352), new Tree(512, 352), new Tree(544, 352), new Tree(576, 352), new Tree(672, 352), new Tree(704, 352), new Tree(736, 352), new Tree(768, 352),
    new Tree(0, 384), new Tree(32, 384), new Tree(64, 384), new Tree(96, 384), new Tree(192, 384), new Tree(224, 384), new Tree(352, 384), new Tree(448, 384), new Tree(480, 384), new Tree(512, 384), new Tree(544, 384), new Tree(576, 384), new Tree(672, 384), new Tree(704, 384), new Tree(736, 384), new Tree(768, 384),
    new Tree(0, 416), new Tree(32, 416), new Tree(64, 416), new Tree(96, 416), new Tree(192, 416), new Tree(224, 416), new Tree(256, 416), new Tree(288, 416), new Tree(320, 416), new Tree(352, 416, tree_snow), new Tree(672, 416), new Tree(736, 416), new Tree(704, 416), new Tree(768, 416),
    new Tree(0, 448), new Tree(288, 448), new Tree(320, 448, tree_snow), new Tree(352, 448, tree_snow), new Tree(672, 448), new Tree(704, 448), new Tree(736, 448), new Tree(768, 448),
    new Tree(0, 480), new Tree(288, 480, tree_snow), new Tree(320, 480, tree_snow), new Tree(352, 480, tree_snow), new Tree(416, 480, tree_snow), new Tree(448, 480, tree_snow), new Tree(480, 480, tree_snow), new Tree(512, 480), new Tree(544, 480), new Tree(768, 480),
    new Tree(0, 512), new Tree(288, 512, tree_snow), new Tree(320, 512, tree_snow), new Tree(352, 512, tree_snow), new Tree(416, 512, tree_snow), new Tree(448, 512, tree_snow), new Tree(480, 512, tree_snow), new Tree(512, 512, tree_snow), new Tree(544, 512), new Tree(768, 512),
    new Tree(0, 544), new Tree(288, 544, tree_snow), new Tree(320, 544, tree_snow), new Tree(352, 544, tree_snow), new Tree(416, 544, tree_snow), new Tree(448, 544, tree_snow), new Tree(480, 544, tree_snow), new Tree(512, 544, tree_snow), new Tree(544, 544, tree_snow), new Tree(768, 544),
    new Tree(0, 576), new Tree(288, 576, tree_snow), new Tree(320, 576, tree_snow), new Tree(352, 576, tree_snow), new Tree(416, 576, tree_snow), new Tree(448, 576, tree_snow), new Tree(480, 576, tree_snow), new Tree(512, 576, tree_snow), new Tree(544, 576, tree_snow), new Tree(576, 576, tree_snow), new Tree(608, 576), new Tree(640, 576), new Tree(672, 576), new Tree(704, 576), new Tree(736, 576), new Tree(768, 576),
];
export const houses = [
    new House(512, 96), 
    new House(512, 256),
];
export const teachers = [
    new WoodCutter(608, 128),
];
export const waters = [
    new Water(64, 32, upLeft), new Water(96, 32, up), new Water(128, 32, up), new Water(160, 32, up), new Water(192, 32, up), new Water(224, 32, up), new Water(256, 32, up), new Water(288, 32, up), new Water(320, 32, up), new Water(352, 32, up), new Water(384, 32, up), new Water(416, 32, up), new Water(448, 32, up), new Water(480, 32, upRight),
    new Water(64, 64, left), new Water(96, 64), new Water(128, 64), new Water(160, 64), new Water(192, 64), new Water(224, 64), new Water(256, 64), new Water(288, 64), new Water(320, 64), new Water(352, 64), new Water(384, 64), new Water(416, 64), new Water(448, 64), new Water(480, 64, right),
    new Water(64, 96, downLeft), new Water(96, 96, down), new Water(128, 96, down), new Water(160, 96, down), new Water(192, 96, down), new Water(224, 96, down), new Water(256, 96, down), new Water(288, 96, down), new Water(320, 96, down), new Water(352, 96, down), new Water(384, 96, down), new Water(416, 96, down), new Water(448, 96, down), new Water(480, 96, downRight),

    new Water(576, 480, upLeft), new Water(608, 480, up), new Water(640, 480, up), new Water(672, 480, up), new Water(704, 480, up), new Water(736, 480, upRight),
    new Water(576, 512, left), new Water(608, 512), new Water(640, 512), new Water(672, 512), new Water(704, 512), new Water(736, 512, right),
    new Water(576, 544, downLeft), new Water(608, 544, down), new Water(640, 544, down), new Water(672, 544, down), new Water(704, 544, down), new Water(736, 544, downRight),

];
export const wildGrass = [
    new WildGrass(160, 160), new WildGrass(192, 160), new WildGrass(224, 160),
    new WildGrass(160, 192), new WildGrass(192, 192), new WildGrass(224, 192),
    new WildGrass(160, 224), new WildGrass(192, 224),

    new WildGrass(384, 224), new WildGrass(416, 224),
    new WildGrass(384, 256), new WildGrass(416, 256),

    new WildGrass(256, 320), new WildGrass(288, 320), new WildGrass(320, 320),
    new WildGrass(256, 352), new WildGrass(288, 352),
    new WildGrass(128, 384), new WildGrass(160, 384), new WildGrass(256, 384), new WildGrass(608, 384), new WildGrass(640, 384),
    new WildGrass(128, 416), new WildGrass(160, 416), new WildGrass(448, 416), new WildGrass(480, 416), new WildGrass(512, 416), new WildGrass(576, 416), new WildGrass(608, 416), new WildGrass(640, 416),
    new WildGrass(128, 448), new WildGrass(160, 448), new WildGrass(448, 448, wild, wildDown), new WildGrass(480, 448), new WildGrass(512, 448), new WildGrass(576, 448), new WildGrass(608, 448), new WildGrass(640, 448),
    new WildGrass(64, 480), new WildGrass(96, 480), new WildGrass(128, 480), new WildGrass(160, 480), new WildGrass(192, 480), new WildGrass(224, 480),
    new WildGrass(64, 512), new WildGrass(96, 512), new WildGrass(128, 512), new WildGrass(160, 512), new WildGrass(192, 512), new WildGrass(224, 512),
    new WildGrass(64, 544), new WildGrass(96, 544), new WildGrass(128, 544), new WildGrass(160, 544), new WildGrass(192, 544), new WildGrass(224, 544, wild, wildDown),
];

export const snowForest = {
    grassSpritePath : './sprites/terrain/grass.png',
    portal,
    rocks,
    trees,
    houses,
    teachers,
    bushes,
    wildGrass,
    floor,
    waters
};