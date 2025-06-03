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
let rock = './sprites/resources/rock_snow.png';
let bush = './sprites/resources/bush_snow.png';
let wildgrass = './sprites/resources/wildGrass_snow.png';
let wildDown = './sprites/resources/wildGrassDown_snow.png';
let tree = './sprites/resources/tree_snow.png';

let down = './sprites/water/down.png';
let up = './sprites/water/up.png';
let left = './sprites/water/left.png';
let right = './sprites/water/right.png';
let downleft = './sprites/water/downleft.png';
let downright = './sprites/water/downright.png';
let upleft = './sprites/water/upleft.png';
let upright = './sprites/water/upright.png';
let downleftreverse = './sprites/water/downleftreverse.png';
let downrightreverse = './sprites/water/downrightreverse.png';
let upleftreverse = './sprites/water/upleftreverse.png';
let uprightreverse = './sprites/water/uprightreverse.png';

/**
 * Esta clase define las listas de entidades que componen el mapa del pueblo.
 * @author Luis Antonio Expósito Sánchez
 */
export const floor = [
    new Floor(320,224, path), new Floor(352,224, path), new Floor(384,224, path), new Floor(416,224, path), new Floor(448,224, path),
    new Floor(320,256, path), new Floor(352,256, path), new Floor(384,256, path), new Floor(416,256, path), new Floor(448,256, path),
    new Floor(320,288, path), new Floor(352,288, path), new Floor(384,288, path), new Floor(416,288, path), new Floor(448,288, path), new Floor(480,288, path), new Floor(512,288, path), new Floor(544,288, path), new Floor(576,288, path), new Floor(608,288, path), new Floor(640,288, path), new Floor(672,288, path), new Floor(704,288, path), new Floor(736,288, path), new Floor(768,288, path),
    new Floor(320,320, path), new Floor(352,320, path), new Floor(384,320, path), new Floor(416,320, path), new Floor(448,320, path),
    new Floor(320,352, path), new Floor(352,352, path), new Floor(384,352, path), new Floor(416,352, path), new Floor(448,352, path),
];

export const portal = [
    //Derecha
    new Portal(768, 288, "snowtown", 32, 288),
];

export const rocks = [
    new Rock(192, 0, rock), new Rock(224, 0, rock), new Rock(256, 0, rock), new Rock(288, 0, rock), new Rock(320, 0, rock), new Rock(352, 0, rock), new Rock(384, 0, rock), new Rock(416, 0, rock), new Rock(448, 0, rock), new Rock(480, 0, rock), new Rock(512, 0, rock), new Rock(544, 0, rock), new Rock(576, 0, rock), new Rock(608, 0, rock), new Rock(640, 0, rock), new Rock(672, 0, rock), new Rock(704, 0, rock), new Rock(736, 0, rock), new Rock(768, 0, rock),
    new Rock(768, 32, rock), new Rock(768, 64, rock), new Rock(768, 96, rock), new Rock(768, 128, rock), new Rock(768, 160, rock), new Rock(768, 192, rock), new Rock(768, 224, rock), new Rock(768, 256, rock), new Rock(768, 320, rock), new Rock(768, 352, rock), new Rock(768, 384, rock), new Rock(768, 416, rock), new Rock(768, 448, rock), new Rock(768, 480, rock), new Rock(768, 512, rock), new Rock(768, 544, rock),
    new Rock(192, 576, rock), new Rock(224, 576, rock), new Rock(256, 576, rock), new Rock(288, 576, rock), new Rock(320, 576, rock), new Rock(352, 576, rock), new Rock(384, 576, rock), new Rock(416, 576, rock), new Rock(448, 576, rock), new Rock(480, 576, rock), new Rock(512, 576, rock), new Rock(544, 576, rock), new Rock(576, 576, rock), new Rock(608, 576, rock), new Rock(640, 576, rock), new Rock(672, 576, rock), new Rock(704, 576, rock), new Rock(736, 576, rock), new Rock(768, 576, rock),
];

export const trees = [
    new Tree(0,0,tree), new Tree(0,32,tree), new Tree(0,64,tree), new Tree(0,96,tree), new Tree(0,128,tree), new Tree(0,160,tree), new Tree(0,192,tree), new Tree(0,224,tree), new Tree(0,256,tree), new Tree(0,288,tree), new Tree(0,320,tree), new Tree(0,352,tree), new Tree(0,384,tree), new Tree(0,416,tree), new Tree(0,448,tree), new Tree(0,480,tree), new Tree(0,512,tree), new Tree(0,544,tree), new Tree(0,576,tree), 
    new Tree(32,0,tree), new Tree(64,0,tree), new Tree(96,0,tree), new Tree(128,0,tree), new Tree(160,0,tree), 
    new Tree(32,576,tree), new Tree(64,576,tree), new Tree(96,576,tree), new Tree(128,576,tree), new Tree(160,576,tree),
];

export const houses = [

];

export const teachers = [
    new WiseMan(384, 288),
    new WoodCutter(96, 288),
];

export const waters = [
    new Water(192,128,upleft), new Water(224,128,up), new Water(256,128,up), new Water(288,128,up), new Water(320,128,up), new Water(352,128,up), new Water(384,128,up), new Water(416,128,up), new Water(448,128,up), new Water(480,128,up), new Water(512,128,up), new Water(544,128,up), new Water(576,128,upright),
    new Water(192,160,left), new Water(224,160), new Water(256,160), new Water(288,160), new Water(320,160), new Water(352,160), new Water(384,160), new Water(416,160), new Water(448,160), new Water(480,160), new Water(512,160), new Water(544,160), new Water(576,160,right), 
    new Water(192,192,left), new Water(224,192), new Water(256,192), new Water(288,192,downrightreverse), new Water(320,192,down), new Water(352,192,down), new Water(384,192,down), new Water(416,192,down), new Water(448,192,down), new Water(480,192,downleftreverse), new Water(512,192), new Water(544,192), new Water(576,192,right), 
    
    new Water(192,224,left), new Water(224,224), new Water(256,224), new Water(288,224,right), new Water(480,224,left), new Water(512,224), new Water(544,224), new Water(576,224,right), 
    new Water(192,256,left), new Water(224,256), new Water(256,256), new Water(288,256,right), new Water(480,256,downleft), new Water(512,256,down), new Water(544,256,down), new Water(576,256,downright), 
    new Water(192,288,left), new Water(224,288), new Water(256,288), new Water(288,288,right),  
    new Water(192,320,left), new Water(224,320), new Water(256,320), new Water(288,320,right), new Water(480,320,upleft), new Water(512,320,up), new Water(544,320,up), new Water(576,320,upright), 
    new Water(192,352,left), new Water(224,352), new Water(256,352), new Water(288,352,right), new Water(480,352,left), new Water(512,352), new Water(544,352), new Water(576,352,right), 
    
    new Water(192,384,left), new Water(224,384), new Water(256,384), new Water(288,384,uprightreverse), new Water(320,384,up), new Water(352,384,up), new Water(384,384,up), new Water(416,384,up), new Water(448,384,up), new Water(480,384,upleftreverse), new Water(512,384), new Water(544,384), new Water(576,384,right),  
    new Water(192,416,left), new Water(224,416), new Water(256,416), new Water(288,416), new Water(320,416), new Water(352,416), new Water(384,416), new Water(416,416), new Water(448,416), new Water(480,416), new Water(512,416), new Water(544,416), new Water(576,416,right), 
    new Water(192,448,downleft), new Water(224,448,down), new Water(256,448,down), new Water(288,448,down), new Water(320,448,down), new Water(352,448,down), new Water(384,448,down), new Water(416,448,down), new Water(448,448,down), new Water(480,448,down), new Water(512,448,down), new Water(544,448,down), new Water(576,448,downright),
];

export const wildGrass = [  
    new WildGrass(32,32,wildgrass, wildDown), new WildGrass(32,64,wildgrass, wildDown), new WildGrass(32,96,wildgrass, wildDown), new WildGrass(32,128,wildgrass, wildDown), new WildGrass(32,160,wildgrass, wildDown), new WildGrass(32,192,wildgrass, wildDown), new WildGrass(32,224,wildgrass, wildDown), new WildGrass(32,256,wildgrass, wildDown), new WildGrass(32,288,wildgrass, wildDown), new WildGrass(32,320,wildgrass, wildDown), new WildGrass(32,352,wildgrass, wildDown), new WildGrass(32,384,wildgrass, wildDown), new WildGrass(32,416,wildgrass, wildDown), new WildGrass(32,448,wildgrass, wildDown), new WildGrass(32,480,wildgrass, wildDown), new WildGrass(32,512,wildgrass, wildDown), new WildGrass(32,544,wildgrass, wildDown), 
    new WildGrass(64,32,wildgrass, wildDown), new WildGrass(64,64,wildgrass, wildDown), new WildGrass(64,96,wildgrass, wildDown), new WildGrass(64,128,wildgrass, wildDown), new WildGrass(64,160,wildgrass, wildDown), new WildGrass(64,192,wildgrass, wildDown), new WildGrass(64,224,wildgrass, wildDown), new WildGrass(64,256,wildgrass, wildDown), new WildGrass(64,288,wildgrass, wildDown), new WildGrass(64,320,wildgrass, wildDown), new WildGrass(64,352,wildgrass, wildDown), new WildGrass(64,384,wildgrass, wildDown), new WildGrass(64,416,wildgrass, wildDown), new WildGrass(64,448,wildgrass, wildDown), new WildGrass(64,480,wildgrass, wildDown), new WildGrass(64,512,wildgrass, wildDown), new WildGrass(64,544,wildgrass, wildDown),
    new WildGrass(96,32,wildgrass, wildDown), new WildGrass(96,64,wildgrass, wildDown), new WildGrass(96,96,wildgrass, wildDown), new WildGrass(96,128,wildgrass, wildDown), new WildGrass(96,160,wildgrass, wildDown), new WildGrass(96,192,wildgrass, wildDown), new WildGrass(96,224,wildgrass, wildDown), new WildGrass(96,256,wildgrass, wildDown), new WildGrass(96,288,wildgrass, wildDown), new WildGrass(96,320,wildgrass, wildDown), new WildGrass(96,352,wildgrass, wildDown), new WildGrass(96,384,wildgrass, wildDown), new WildGrass(96,416,wildgrass, wildDown), new WildGrass(96,448,wildgrass, wildDown), new WildGrass(96,480,wildgrass, wildDown), new WildGrass(96,512,wildgrass, wildDown), new WildGrass(96,544,wildgrass, wildDown),
    new WildGrass(128,32,wildgrass, wildDown), new WildGrass(128,64,wildgrass, wildDown), new WildGrass(128,96,wildgrass, wildDown), new WildGrass(128,128,wildgrass, wildDown), new WildGrass(128,160,wildgrass, wildDown), new WildGrass(128,192,wildgrass, wildDown), new WildGrass(128,224,wildgrass, wildDown), new WildGrass(128,256,wildgrass, wildDown), new WildGrass(128,288,wildgrass, wildDown), new WildGrass(128,320,wildgrass, wildDown), new WildGrass(128,352,wildgrass, wildDown), new WildGrass(128,384,wildgrass, wildDown), new WildGrass(128,416,wildgrass, wildDown), new WildGrass(128,448,wildgrass, wildDown), new WildGrass(128,480,wildgrass, wildDown), new WildGrass(128,512,wildgrass, wildDown), new WildGrass(128,544,wildgrass, wildDown),
    new WildGrass(160,32,wildgrass, wildDown), new WildGrass(160,64,wildgrass, wildDown), new WildGrass(160,96,wildgrass, wildDown), new WildGrass(160,128,wildgrass, wildDown), new WildGrass(160,160,wildgrass, wildDown), new WildGrass(160,192,wildgrass, wildDown), new WildGrass(160,224,wildgrass, wildDown), new WildGrass(160,256,wildgrass, wildDown), new WildGrass(160,288,wildgrass, wildDown),  new WildGrass(160,320,wildgrass, wildDown), new WildGrass(160,352,wildgrass, wildDown), new WildGrass(160,384,wildgrass, wildDown), new WildGrass(160,416,wildgrass, wildDown), new WildGrass(160,448,wildgrass, wildDown), new WildGrass(160,480,wildgrass, wildDown), new WildGrass(160,512,wildgrass, wildDown), new WildGrass(160,544,wildgrass, wildDown),

    new WildGrass(608,32,wildgrass, wildDown), new WildGrass(608,64,wildgrass, wildDown), new WildGrass(608,96,wildgrass, wildDown), new WildGrass(608,128,wildgrass, wildDown), new WildGrass(608,160,wildgrass, wildDown), new WildGrass(608,192,wildgrass, wildDown), new WildGrass(608,224,wildgrass, wildDown), new WildGrass(608,256,wildgrass, wildDown), new WildGrass(608,320,wildgrass, wildDown), new WildGrass(608,352,wildgrass, wildDown), new WildGrass(608,384,wildgrass, wildDown), new WildGrass(608,416,wildgrass, wildDown), new WildGrass(608,448,wildgrass, wildDown), new WildGrass(608,480,wildgrass, wildDown), new WildGrass(608,512,wildgrass, wildDown), new WildGrass(608,544,wildgrass, wildDown),
    new WildGrass(640,32,wildgrass, wildDown), new WildGrass(640,64,wildgrass, wildDown), new WildGrass(640,96,wildgrass, wildDown), new WildGrass(640,128,wildgrass, wildDown), new WildGrass(640,160,wildgrass, wildDown), new WildGrass(640,192,wildgrass, wildDown), new WildGrass(640,224,wildgrass, wildDown), new WildGrass(640,256,wildgrass, wildDown), new WildGrass(640,320,wildgrass, wildDown), new WildGrass(640,352,wildgrass, wildDown), new WildGrass(640,384,wildgrass, wildDown), new WildGrass(640,416,wildgrass, wildDown), new WildGrass(640,448,wildgrass, wildDown), new WildGrass(640,480,wildgrass, wildDown), new WildGrass(640,512,wildgrass, wildDown), new WildGrass(640,544,wildgrass, wildDown),
    new WildGrass(672,32,wildgrass, wildDown), new WildGrass(672,64,wildgrass, wildDown), new WildGrass(672,96,wildgrass, wildDown), new WildGrass(672,128,wildgrass, wildDown), new WildGrass(672,160,wildgrass, wildDown), new WildGrass(672,192,wildgrass, wildDown), new WildGrass(672,224,wildgrass, wildDown), new WildGrass(672,256,wildgrass, wildDown), new WildGrass(672,320,wildgrass, wildDown), new WildGrass(672,352,wildgrass, wildDown), new WildGrass(672,384,wildgrass, wildDown), new WildGrass(672,416,wildgrass, wildDown), new WildGrass(672,448,wildgrass, wildDown), new WildGrass(672,480,wildgrass, wildDown), new WildGrass(672,512,wildgrass, wildDown), new WildGrass(672,544,wildgrass, wildDown),
    new WildGrass(704,32,wildgrass, wildDown), new WildGrass(704,64,wildgrass, wildDown), new WildGrass(704,96,wildgrass, wildDown), new WildGrass(704,128,wildgrass, wildDown), new WildGrass(704,160,wildgrass, wildDown), new WildGrass(704,192,wildgrass, wildDown), new WildGrass(704,224,wildgrass, wildDown), new WildGrass(704,256,wildgrass, wildDown), new WildGrass(704,320,wildgrass, wildDown), new WildGrass(704,352,wildgrass, wildDown), new WildGrass(704,384,wildgrass, wildDown), new WildGrass(704,416,wildgrass, wildDown), new WildGrass(704,448,wildgrass, wildDown), new WildGrass(704,480,wildgrass, wildDown), new WildGrass(704,512,wildgrass, wildDown), new WildGrass(704,544,wildgrass, wildDown),
    new WildGrass(736,32,wildgrass, wildDown), new WildGrass(736,64,wildgrass, wildDown), new WildGrass(736,96,wildgrass, wildDown), new WildGrass(736,128,wildgrass, wildDown), new WildGrass(736,160,wildgrass, wildDown), new WildGrass(736,192,wildgrass, wildDown), new WildGrass(736,224,wildgrass, wildDown), new WildGrass(736,256,wildgrass, wildDown), new WildGrass(736,320,wildgrass, wildDown), new WildGrass(736,352,wildgrass, wildDown), new WildGrass(736,384,wildgrass, wildDown), new WildGrass(736,416,wildgrass, wildDown), new WildGrass(736,448,wildgrass, wildDown), new WildGrass(736,480,wildgrass, wildDown), new WildGrass(736,512,wildgrass, wildDown), new WildGrass(736,544,wildgrass, wildDown),
];
export const bushes = [
    new Bush(192, 32, bush), new Bush(192, 64, bush), new Bush(192, 96, bush), new Bush(192, 480, bush), new Bush(192, 512, bush), new Bush(192, 544, bush), 
    new Bush(224, 32, bush), new Bush(224, 64, bush), new Bush(224, 96, bush), new Bush(224, 480, bush), new Bush(224, 512, bush), new Bush(224, 544, bush),
    new Bush(256, 32, bush), new Bush(256, 64, bush), new Bush(256, 96, bush), new Bush(256, 480, bush), new Bush(256, 512, bush), new Bush(256, 544, bush),
    new Bush(288, 32, bush), new Bush(288, 64, bush), new Bush(288, 96, bush), new Bush(288, 480, bush), new Bush(288, 512, bush), new Bush(288, 544, bush),
    new Bush(320, 32, bush), new Bush(320, 64, bush), new Bush(320, 96, bush), new Bush(320, 480, bush), new Bush(320, 512, bush), new Bush(320, 544, bush),
    new Bush(352, 32, bush), new Bush(352, 64, bush), new Bush(352, 96, bush), new Bush(352, 480, bush), new Bush(352, 512, bush), new Bush(352, 544, bush),
    new Bush(384, 32, bush), new Bush(384, 64, bush), new Bush(384, 96, bush), new Bush(384, 480, bush), new Bush(384, 512, bush), new Bush(384, 544, bush),
    new Bush(416, 32, bush), new Bush(416, 64, bush), new Bush(416, 96, bush), new Bush(416, 480, bush), new Bush(416, 512, bush), new Bush(416, 544, bush),
    new Bush(448, 32, bush), new Bush(448, 64, bush), new Bush(448, 96, bush), new Bush(448, 480, bush), new Bush(448, 512, bush), new Bush(448, 544, bush),
    new Bush(480, 32, bush), new Bush(480, 64, bush), new Bush(480, 96, bush), new Bush(480, 480, bush), new Bush(480, 512, bush), new Bush(480, 544, bush),
    new Bush(512, 32, bush), new Bush(512, 64, bush), new Bush(512, 96, bush), new Bush(512, 480, bush), new Bush(512, 512, bush), new Bush(512, 544, bush),
    new Bush(544, 32, bush), new Bush(544, 64, bush), new Bush(544, 96, bush), new Bush(544, 480, bush), new Bush(544, 512, bush), new Bush(544, 544, bush),
    new Bush(576, 32, bush), new Bush(576, 64, bush), new Bush(576, 96, bush), new Bush(576, 480, bush), new Bush(576, 512, bush), new Bush(576, 544, bush),

];

export const snowland = {
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