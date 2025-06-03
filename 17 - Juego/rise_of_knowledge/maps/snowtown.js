//Declaramos las dependencias a usar.
import { Tree } from "../entities/tree.js";
import { Rock } from "../entities/rock.js";
import { House } from "../entities/house.js";
import { WoodCutter } from "../entities/woodcutter.js";
import { WiseMan } from "../entities/wiseman.js";
import { Portal } from "../entities/portal.js";
import { Water } from "../entities/water.js";
import { Miner } from "../entities/miner.js";
import { Bush } from "../entities/bush.js";
import { Floor } from "../entities/floor.js";
import { WildGrass } from "../entities/wildGrass.js";

let path = './sprites/terrain/path_snow.png';
let tree = './sprites/resources/tree_snow.png';
let rock = './sprites/resources/rock_snow.png';
let house = './sprites/house_snow.png';
let bush = './sprites/resources/bush_snow.png';
let wildgrass = './sprites/resources/wildgrass_snow.png';
let wildDown = './sprites/resources/wildGrassDown_snow.png';

/**
 * Esta clase define las listas de entidades que componen el mapa del pueblo.
 * @author Luis Antonio Expósito Sánchez
 */
export const floor = [
    new Floor(384, 128, path), new Floor(384, 160, path), new Floor(384, 192, path), new Floor(384, 224, path), new Floor(384, 256, path), new Floor(384, 288, path), new Floor(384, 320, path), new Floor(384, 352, path), new Floor(384, 448, path), 
    new Floor(0, 288, path), new Floor(32, 288, path), new Floor(64, 288, path), new Floor(96, 288, path), new Floor(128, 288, path), new Floor(160, 288, path), new Floor(192, 288, path), new Floor(224, 288, path), new Floor(320, 288, path), new Floor(352, 288, path), new Floor(416, 288, path), new Floor(448, 288, path), new Floor(480, 288, path), new Floor(512, 288, path), new Floor(544, 288, path), new Floor(576, 288, path), new Floor(608, 288, path), new Floor(640, 288, path), new Floor(672, 288, path), new Floor(704, 288, path), new Floor(736, 288, path), new Floor(768, 288, path),
    new Floor(128, 192, path), new Floor(128, 224, path), new Floor(128, 256, path), 
    new Floor(128, 512, path), new Floor(160, 512, path), new Floor(192, 512,path), new Floor(192, 480,path), new Floor(192, 416,path), new Floor(192, 384,path), new Floor(192, 352,path), new Floor(192, 320,path),
    new Floor(224, 320, path), new Floor(256, 320, path), new Floor(288, 320, path),new Floor(320, 320, path),
    new Floor(384, 448, path), new Floor(352, 448, path), new Floor(352, 416, path), new Floor(352, 384, path), new Floor(352, 352, path), new Floor(320, 448, path), new Floor(288, 448, path), new Floor(256, 448, path), new Floor(224, 448, path),  new Floor(192, 448, path), new Floor(416, 448, path), new Floor(448, 448, path), new Floor(480, 448, path), new Floor(512, 448, path),
    new Floor(512,256,path), new Floor(512,320,path), new Floor(512,352,path), new Floor(512,384,path), new Floor(512,416,path),
    new Floor(640, 384,path),  new Floor(608, 384,path), new Floor(576, 384,path), new Floor(544, 384,path),
];

export const portal = [
    //Izquierda
    new Portal(0, 288, "snowland", 736, 288),

    //Derecha
    new Portal(768, 288, "icevalley", 32, 288),
];

export const rocks = [
    new Rock(0, 320, rock), new Rock(32, 320, rock), new Rock(736, 320, rock), new Rock(768, 320, rock),
    new Rock(0, 352, rock), new Rock(32, 352, rock), new Rock(736, 352, rock), new Rock(768, 352, rock),
    new Rock(0, 384, rock), new Rock(32, 384, rock), new Rock(736, 384, rock), new Rock(768, 384, rock),
    new Rock(0, 416, rock), new Rock(32, 416, rock), new Rock(736, 416, rock), new Rock(768, 416, rock),
    new Rock(0, 448, rock), new Rock(32, 448, rock), new Rock(736, 448, rock), new Rock(768, 448, rock),
    new Rock(0, 480, rock), new Rock(32, 480, rock), new Rock(736, 480, rock), new Rock(768, 480, rock),
    new Rock(0, 512, rock), new Rock(32, 512, rock), new Rock(736, 512, rock), new Rock(768, 512, rock),

    new Rock(416,128, rock), new Rock(416,160, rock), new Rock(416,192, rock), new Rock(416,224, rock), new Rock(416,256, rock), 
    new Rock(448,128, rock), new Rock(448,160, rock), new Rock(448,192, rock), new Rock(448,224, rock), new Rock(448,256, rock), 
    new Rock(480,128, rock), new Rock(480,160, rock), new Rock(480,192, rock), new Rock(480,224, rock), new Rock(480,256, rock), 
];

export const trees = [
    new Tree(0, 0, tree), new Tree(32, 0, tree), new Tree(64, 0, tree), new Tree(96, 0, tree), new Tree(128, 0, tree), new Tree(160, 0, tree), new Tree(192, 0, tree), new Tree(224, 0, tree), new Tree(256, 0, tree), new Tree(288, 0, tree), new Tree(320, 0, tree), new Tree(352, 0, tree), new Tree(384, 0, tree), new Tree(416, 0, tree), new Tree(448, 0, tree), new Tree(480, 0, tree), new Tree(512, 0, tree), new Tree(544, 0, tree), new Tree(576, 0, tree), new Tree(608, 0, tree), new Tree(640, 0, tree), new Tree(672, 0, tree), new Tree(704, 0, tree), new Tree(736, 0, tree), new Tree(768, 0, tree), 
    new Tree(0, 32, tree), new Tree(32, 32, tree), new Tree(64, 32, tree), new Tree(96, 32, tree), new Tree(128, 32, tree), new Tree(160, 32, tree), new Tree(192, 32, tree), new Tree(224, 32, tree), new Tree(256, 32, tree), new Tree(288, 32, tree), new Tree(320, 32, tree), new Tree(352, 32, tree), new Tree(384, 32, tree), new Tree(416, 32, tree), new Tree(448, 32, tree), new Tree(480, 32, tree), new Tree(512, 32, tree), new Tree(544, 32, tree), new Tree(576, 32, tree), new Tree(608, 32, tree), new Tree(640, 32, tree), new Tree(672, 32, tree), new Tree(704, 32, tree), new Tree(736, 32, tree), new Tree(768, 32, tree),

    new Tree(0, 64, tree), new Tree(32, 64, tree), new Tree(736, 64, tree), new Tree(768, 64, tree),
    new Tree(0, 96, tree), new Tree(32, 96, tree), new Tree(736, 96, tree), new Tree(768, 96, tree),
    new Tree(0, 128, tree), new Tree(32, 128, tree), new Tree(736, 128, tree), new Tree(768, 128, tree),
    new Tree(0, 160, tree), new Tree(32, 160, tree), new Tree(736, 160, tree), new Tree(768, 160, tree),
    new Tree(0, 192, tree), new Tree(32, 192, tree), new Tree(736, 192, tree), new Tree(768, 192, tree),
    new Tree(0, 224, tree), new Tree(32, 224, tree), new Tree(736, 224, tree), new Tree(768, 224, tree),
    new Tree(0, 256, tree), new Tree(32, 256, tree), new Tree(736, 256, tree), new Tree(768, 256, tree),

    new Tree(224, 352, tree), new Tree(256, 352, tree), new Tree(288, 352, tree), new Tree(320, 352, tree),  new Tree(224, 384, tree), new Tree(256, 384, tree), new Tree(288, 384, tree), new Tree(320, 384, tree),  new Tree(224, 416, tree), new Tree(256, 416, tree), new Tree(288, 416, tree), new Tree(320, 416, tree),
];

export const houses = [
    new House(384, 64, house),
    new House(128,128, house), new House(128, 448, house),
    new House(256,256, house),
    new House(384,384, house),
    new House(512,192, house),
    new House(640,320, house),
];

export const teachers = [
];

export const waters = [
    new Water(0, 544), new Water(32, 544), new Water(64, 544), new Water(96, 544), new Water(128, 544), new Water(160, 544), new Water(192, 544), new Water(224, 544), new Water(256, 544), new Water(288, 544), new Water(320, 544), new Water(352, 544), new Water(384, 544), new Water(416, 544), new Water(448, 544), new Water(480, 544), new Water(512, 544), new Water(544, 544), new Water(576, 544), new Water(608, 544), new Water(640, 544), new Water(672, 544), new Water(704, 544), new Water(736, 544), new Water(768, 544),
    new Water(0, 576), new Water(32, 576), new Water(64, 576), new Water(96, 576), new Water(128, 576), new Water(160, 576), new Water(192, 576), new Water(224, 576), new Water(256, 576), new Water(288, 576), new Water(320, 576), new Water(352, 576), new Water(384, 576), new Water(416, 576), new Water(448, 576), new Water(480, 576), new Water(512, 576), new Water(544, 576), new Water(576, 576), new Water(608, 576), new Water(640, 576), new Water(672, 576), new Water(704, 576), new Water(736, 576), new Water(768, 576),
];

export const wildGrass = [
    new WildGrass(64,64,wildgrass, wildDown), new WildGrass(96,64,wildgrass, wildDown), new WildGrass(128,64,wildgrass, wildDown), new WildGrass(160,64,wildgrass, wildDown), new WildGrass(192,64,wildgrass, wildDown), new WildGrass(224,64,wildgrass, wildDown), new WildGrass(256,64,wildgrass, wildDown), new WildGrass(288,64,wildgrass, wildDown), new WildGrass(320,64,wildgrass, wildDown), new WildGrass(352,96,wildgrass, wildDown), new WildGrass(448,64,wildgrass, wildDown), new WildGrass(480,64,wildgrass, wildDown), new WildGrass(512,64,wildgrass, wildDown), new WildGrass(544,64,wildgrass, wildDown), new WildGrass(576,64,wildgrass, wildDown), new WildGrass(608,64,wildgrass, wildDown), new WildGrass(640,64,wildgrass, wildDown), new WildGrass(672,64,wildgrass, wildDown), new WildGrass(704,64,wildgrass, wildDown), 
    new WildGrass(64,96,wildgrass, wildDown), new WildGrass(96,96,wildgrass, wildDown), new WildGrass(128,96,wildgrass, wildDown), new WildGrass(160,96,wildgrass, wildDown), new WildGrass(192,96,wildgrass, wildDown), new WildGrass(224,96,wildgrass, wildDown), new WildGrass(256,96,wildgrass, wildDown), new WildGrass(288,96,wildgrass, wildDown), new WildGrass(320,96,wildgrass, wildDown), new WildGrass(352,96,wildgrass, wildDown), new WildGrass(448,96,wildgrass, wildDown), new WildGrass(480,96,wildgrass, wildDown), new WildGrass(512,96,wildgrass, wildDown), new WildGrass(544,96,wildgrass, wildDown), new WildGrass(576,96,wildgrass, wildDown), new WildGrass(608,96,wildgrass, wildDown), new WildGrass(640,96,wildgrass, wildDown), new WildGrass(672,96,wildgrass, wildDown), new WildGrass(704,96,wildgrass, wildDown),
    new WildGrass(64,128,wildgrass, wildDown), new WildGrass(96,128,wildgrass, wildDown), new WildGrass(192,128,wildgrass, wildDown), new WildGrass(224,128,wildgrass, wildDown), new WildGrass(256,128,wildgrass, wildDown), new WildGrass(288,128,wildgrass, wildDown), new WildGrass(320,128,wildgrass, wildDown), new WildGrass(352,128,wildgrass, wildDown), new WildGrass(512,128,wildgrass, wildDown), new WildGrass(544,128,wildgrass, wildDown), new WildGrass(576,128,wildgrass, wildDown), new WildGrass(608,128,wildgrass, wildDown), new WildGrass(640,128,wildgrass, wildDown), new WildGrass(672,128,wildgrass, wildDown), new WildGrass(704,128,wildgrass, wildDown),
    new WildGrass(64,160,wildgrass, wildDown), new WildGrass(96,160,wildgrass, wildDown), new WildGrass(192,160,wildgrass, wildDown), new WildGrass(224,160,wildgrass, wildDown), new WildGrass(256,160,wildgrass, wildDown), new WildGrass(288,160,wildgrass, wildDown), new WildGrass(320,160,wildgrass, wildDown), new WildGrass(352,160,wildgrass, wildDown), new WildGrass(512,160,wildgrass, wildDown), new WildGrass(544,160,wildgrass, wildDown), new WildGrass(576,160,wildgrass, wildDown), new WildGrass(608,160,wildgrass, wildDown), new WildGrass(640,160,wildgrass, wildDown), new WildGrass(672,160,wildgrass, wildDown), new WildGrass(704,160,wildgrass, wildDown),
    new WildGrass(64,192,wildgrass, wildDown), new WildGrass(96,192,wildgrass, wildDown), new WildGrass(160,192,wildgrass, wildDown), new WildGrass(192,192,wildgrass, wildDown), new WildGrass(224,192,wildgrass, wildDown), new WildGrass(256,192,wildgrass, wildDown), new WildGrass(288,192,wildgrass, wildDown), new WildGrass(320,192,wildgrass, wildDown), new WildGrass(352,192,wildgrass, wildDown), new WildGrass(576,192,wildgrass, wildDown), new WildGrass(608,192,wildgrass, wildDown), new WildGrass(640,192,wildgrass, wildDown), new WildGrass(672,192,wildgrass, wildDown), new WildGrass(704,192,wildgrass, wildDown),
    new WildGrass(64,224,wildgrass, wildDown), new WildGrass(96,224,wildgrass, wildDown), new WildGrass(160,224,wildgrass, wildDown), new WildGrass(192,224,wildgrass, wildDown), new WildGrass(224,224,wildgrass, wildDown), new WildGrass(256,224,wildgrass, wildDown), new WildGrass(288,224,wildgrass, wildDown), new WildGrass(320,224,wildgrass, wildDown), new WildGrass(352,224,wildgrass, wildDown), new WildGrass(576,224,wildgrass, wildDown), new WildGrass(608,224,wildgrass, wildDown), new WildGrass(640,224,wildgrass, wildDown), new WildGrass(672,224,wildgrass, wildDown), new WildGrass(704,224,wildgrass, wildDown),
    new WildGrass(96,256,wildgrass, wildDown), new WildGrass(160,256,wildgrass, wildDown), new WildGrass(192,256,wildgrass, wildDown), new WildGrass(224,256,wildgrass, wildDown), new WildGrass(320,256,wildgrass, wildDown), new WildGrass(352,256,wildgrass, wildDown), new WildGrass(544,256,wildgrass, wildDown), new WildGrass(576,256,wildgrass, wildDown), new WildGrass(608,256,wildgrass, wildDown), new WildGrass(640,256,wildgrass, wildDown), new WildGrass(672,256,wildgrass, wildDown), new WildGrass(704,256,wildgrass, wildDown),
    new WildGrass(96,320,wildgrass, wildDown), new WildGrass(128,320,wildgrass, wildDown), new WildGrass(160,320,wildgrass, wildDown), new WildGrass(352,320,wildgrass, wildDown), new WildGrass(544,320,wildgrass, wildDown), new WildGrass(576,320,wildgrass, wildDown), new WildGrass(608,320,wildgrass, wildDown),
    new WildGrass(64,352,wildgrass, wildDown), new WildGrass(96,352,wildgrass, wildDown), new WildGrass(128,352,wildgrass, wildDown), new WildGrass(160,352,wildgrass, wildDown), new WildGrass(544,352,wildgrass, wildDown), new WildGrass(576,352,wildgrass, wildDown), new WildGrass(608,352,wildgrass, wildDown), new WildGrass(704,352,wildgrass, wildDown),
    new WildGrass(64,384,wildgrass, wildDown), new WildGrass(96,384,wildgrass, wildDown), new WildGrass(128,384,wildgrass, wildDown), new WildGrass(160,384,wildgrass, wildDown), new WildGrass(672,384,wildgrass, wildDown), new WildGrass(704,384,wildgrass, wildDown),
    new WildGrass(64,416,wildgrass, wildDown), new WildGrass(96,416,wildgrass, wildDown), new WildGrass(128,416,wildgrass, wildDown), new WildGrass(160,416,wildgrass, wildDown), new WildGrass(544,416,wildgrass, wildDown), new WildGrass(576,416,wildgrass, wildDown), new WildGrass(608,416,wildgrass, wildDown), new WildGrass(640,416,wildgrass, wildDown), new WildGrass(672,416,wildgrass, wildDown), new WildGrass(704,416,wildgrass, wildDown),
    new WildGrass(64,448,wildgrass, wildDown), new WildGrass(96,448,wildgrass, wildDown), new WildGrass(544,448,wildgrass, wildDown), new WildGrass(576,448,wildgrass, wildDown), new WildGrass(608,448,wildgrass, wildDown), new WildGrass(640,448,wildgrass, wildDown), new WildGrass(672,448,wildgrass, wildDown), new WildGrass(704,448,wildgrass, wildDown),
    new WildGrass(64,480,wildgrass, wildDown), new WildGrass(96,480,wildgrass, wildDown), new WildGrass(224,480,wildgrass, wildDown), new WildGrass(256,480,wildgrass, wildDown), new WildGrass(288,480,wildgrass, wildDown), new WildGrass(320,480,wildgrass, wildDown), new WildGrass(352,480,wildgrass, wildDown), new WildGrass(384,480,wildgrass, wildDown), new WildGrass(416,480,wildgrass, wildDown), new WildGrass(448,480,wildgrass, wildDown), new WildGrass(480,480,wildgrass, wildDown), new WildGrass(512,480,wildgrass, wildDown), new WildGrass(544,480,wildgrass, wildDown), new WildGrass(576,480,wildgrass, wildDown), new WildGrass(608,480,wildgrass, wildDown), new WildGrass(640,480,wildgrass, wildDown), new WildGrass(672,480,wildgrass, wildDown), new WildGrass(704,480,wildgrass, wildDown),
    new WildGrass(64,512,wildgrass, wildDown), new WildGrass(96,512,wildgrass, wildDown), new WildGrass(224,512,wildgrass, wildDown), new WildGrass(256,512,wildgrass, wildDown), new WildGrass(288,512,wildgrass, wildDown), new WildGrass(320,512,wildgrass, wildDown), new WildGrass(352,512,wildgrass, wildDown), new WildGrass(384,512,wildgrass, wildDown), new WildGrass(416,512,wildgrass, wildDown), new WildGrass(448,512,wildgrass, wildDown), new WildGrass(480,512,wildgrass, wildDown), new WildGrass(512,512,wildgrass, wildDown), new WildGrass(544,512,wildgrass, wildDown), new WildGrass(576,512,wildgrass, wildDown), new WildGrass(608,512,wildgrass, wildDown), new WildGrass(640,512,wildgrass, wildDown), new WildGrass(672,512,wildgrass, wildDown), new WildGrass(704,512,wildgrass, wildDown),

];
export const bushes = [
    new Bush(352, 64, bush),
    new Bush(384, 64, bush), 
    new Bush(416, 64, bush),
    new Bush(704, 256, bush), new Bush(704, 288, bush), new Bush(704, 320, bush),

    new Bush(416,320, bush), new Bush(416,352, bush), new Bush(448,320, bush), new Bush(448,352, bush), new Bush(448,384, bush), new Bush(448,416, bush), new Bush(480,320, bush), new Bush(480,352, bush), new Bush(480,384, bush), new Bush(480,416, bush), 
];

export const snowtown = {
    grassSpritePath : './sprites/terrain/snow.png',
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