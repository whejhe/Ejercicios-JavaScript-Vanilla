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

let pathsnow = './sprites/terrain/path_snow.png';
let path = './sprites/terrain/path.png';
let rock = './sprites/resources/rock_snow.png';
let bush = './sprites/resources/bush_snow.png';
let wildgrass = './sprites/resources/wildgrass_snow.png';
let tree = './sprites/resources/tree_snow.png';
let pathtosnow = './sprites/terrain/path_toSnow.png';
let grass ='./sprites/terrain/grass.png';
let grassSnow = './sprites/terrain/grass_toSnow.png';
let grassSnow2 = './sprites/terrain/snow_toGrass.png';
let grassSnow3 = './sprites/terrain/path_toGrass.png';

let up = './sprites/water/up.png';
let left = './sprites/water/left.png';
let upleft = './sprites/water/upleft.png';
let upright = './sprites/water/upright.png';
let upleftreverse = './sprites/water/upleftreverse.png';
let uprightreverse = './sprites/water/uprightreverse.png';

/**
 * Esta clase define las listas de entidades que componen el mapa del pueblo.
 * @author Luis Antonio Expósito Sánchez
 */
export const floor = [
    new Floor(384, 0,path), new Floor(384, 32,path), new Floor(384, 64,path), new Floor(384, 96,path), new Floor(384, 128,pathtosnow), new Floor(384, 160,pathtosnow), new Floor(384, 192,pathtosnow), new Floor(384, 224,pathsnow), new Floor(384, 256,pathsnow), new Floor(384, 288,pathsnow), 
    new Floor(0, 288,pathsnow), new Floor(32, 288,pathsnow), new Floor(64, 288,pathsnow), new Floor(96, 288,pathsnow), new Floor(128, 288,pathsnow), new Floor(160, 288,pathsnow), new Floor(192, 288,pathsnow), new Floor(224, 288,pathsnow), new Floor(256, 288,pathsnow), new Floor(288, 288,pathsnow), new Floor(320, 288,pathsnow), new Floor(352, 288,pathsnow), 

    new Floor(160,0,grassSnow3), new Floor(192,0,grassSnow2), new Floor(224,0,grassSnow), new Floor(256,0,grass), new Floor(288,0,grass), new Floor(320,0,grass), new Floor(352,0,grass), new Floor(416,0,grass), new Floor(448,0,grass), new Floor(480,0,grass), new Floor(512,0,grass), new Floor(544,0,grassSnow), new Floor(576,0,grassSnow2), new Floor(608,0,grassSnow3), 
    new Floor(192,32,grassSnow3), new Floor(224,32,grassSnow2), new Floor(256,32,grassSnow), new Floor(288,32,grass), new Floor(320,32,grass), new Floor(352,32,grass), new Floor(416,32,grass), new Floor(448,32,grass), new Floor(480,32,grass), new Floor(512,32,grassSnow), new Floor(544,32,grassSnow2), new Floor(576,32,grassSnow3), 
    new Floor(224,64,grassSnow3), new Floor(256,64,grassSnow2), new Floor(288,64,grassSnow), new Floor(320,64,grass), new Floor(352,64,grass), new Floor(416,64,grass), new Floor(448,64,grass),new Floor(480,64,grassSnow), new Floor(512,64,grassSnow2), new Floor(544,64,grassSnow3), 
    new Floor(256,96,grassSnow3), new Floor(288,96,grassSnow2), new Floor(320,96,grassSnow), new Floor(352,96,grass), new Floor(416,96,grass), new Floor(448,96,grassSnow), new Floor(480,96,grassSnow2), new Floor(512,96,grassSnow3), 
    new Floor(288,128,grassSnow3), new Floor(320,128,grassSnow2), new Floor(352,128,grassSnow), new Floor(416,128,grassSnow), new Floor(448,128,grassSnow2), new Floor(480,128,grassSnow3), 
    new Floor(320,160,grassSnow3), new Floor(352,160,grassSnow2), new Floor(416,160,grassSnow2), new Floor(448,160,grassSnow3),
    new Floor(352,192,grassSnow3), new Floor(416,192,grassSnow3),
];

export const portal = [
    //Izquierda
    new Portal(0, 288, "icevalley", 736, 288),

    //Derecha
    //new Portal(768, 288, "volcano", 32, 288),

    //Arriba
    new Portal(384, 0, "town", 384, 544),

    //Abajo
    //new Portal(384, 576, "snow", 384, 32),
];

export const rocks = [
];

export const trees = [
    new Tree(0,0,tree), new Tree(32,0,tree), new Tree(64,0,tree), new Tree(96,0,tree), new Tree(128,0,tree), new Tree(160,0,tree), new Tree(192,0,tree), new Tree(224,0), new Tree(256,0), new Tree(288,0), new Tree(320,0), new Tree(352,0), new Tree(416,0), new Tree(448,0), new Tree(480,0), new Tree(512,0), new Tree(544,0), new Tree(576,0,tree), new Tree(608,0,tree), new Tree(640,0,tree), new Tree(672,0,tree), new Tree(704,0,tree), new Tree(736,0,tree), 

    new Tree(0,32,tree), new Tree(0,64,tree), new Tree(0,96,tree), new Tree(0,128,tree), new Tree(0,160,tree), new Tree(0,192,tree), new Tree(0,224,tree), new Tree(0,256,tree), 

    new Tree(448,224,tree), new Tree(480,224,tree), new Tree(512,224,tree), new Tree(544,224,tree), new Tree(576,224,tree), 
    new Tree(448,256,tree), new Tree(480,256,tree), new Tree(512,256,tree), new Tree(544,256,tree), new Tree(576,256,tree),
    new Tree(448,288,tree), new Tree(480,288,tree), new Tree(512,288,tree), new Tree(544,288,tree), new Tree(576,288,tree),
    new Tree(448,320,tree), new Tree(480,320,tree), new Tree(512,320,tree), new Tree(544,320,tree), new Tree(576,320,tree),

    new Tree(288,352,tree), new Tree(320,352,tree), new Tree(352,352,tree), 
    new Tree(288,384,tree), new Tree(320,384,tree), new Tree(352,384,tree),
    new Tree(288,416,tree), new Tree(320,416,tree), new Tree(352,416,tree),

    new Tree(160,160,tree), new Tree(192,160,tree), new Tree(224,160,tree),
    new Tree(160,192,tree), new Tree(192,192,tree), new Tree(224,192,tree),
    new Tree(160,224,tree), new Tree(192,224,tree), new Tree(224,224,tree),
];

export const houses = [

];

export const teachers = [
];

export const waters = [
    new Water(0,320,upright), new Water(0,352,uprightreverse), new Water(0,384), new Water(0,416), new Water(0,448), new Water(0,480), new Water(0,512), new Water(0,544), new Water(0,576), 
    new Water(32,352,upright), new Water(32,384,uprightreverse), new Water(32,416), new Water(32,448), new Water(32,480), new Water(32,512), new Water(32,544), new Water(32,576),
    new Water(64,384,upright), new Water(64,416,uprightreverse), new Water(64,448), new Water(64,480), new Water(64,512), new Water(64,544), new Water(64,576),
    new Water(96,416,upright), new Water(96,448,uprightreverse), new Water(96,480), new Water(96,512), new Water(96,544), new Water(96,576),
    new Water(128,448,upright), new Water(128,480,uprightreverse), new Water(128,512), new Water(128,544), new Water(128,576),
    new Water(160,480,upright), new Water(160,512,uprightreverse), new Water(160,544), new Water(160,576),
    new Water(192,512,upright), new Water(192,544,uprightreverse), new Water(192,576),
    new Water(224,544,up), new Water(224,576),
    new Water(256,576,),

    new Water(288,576), new Water(320,576), new Water(352,576), new Water(384,576), new Water(416,576), new Water(448,576), new Water(480,576), new Water(512,576), 
    new Water(256,544,up), new Water(288,544,up), new Water(320,544,up), new Water(352,544,up), new Water(384,544,up), new Water(416,544,up), new Water(448,544,up), new Water(480,544,up), new Water(512,544,up), new Water(544,544,up), 
    
    new Water(544,576,),
    new Water(576,544,up), new Water(576,576),
    new Water(608,512,upleft), new Water(608,544,upleftreverse), new Water(608,576),
    new Water(640,480,upleft), new Water(640,512,upleftreverse), new Water(640,544), new Water(640,576),
    new Water(672,448,upleft), new Water(672,480,upleftreverse), new Water(672,512), new Water(672,544), new Water(672,576),
    new Water(704,416,upleft), new Water(704,448,upleftreverse), new Water(704,480), new Water(704,512), new Water(704,544), new Water(704,576),
    new Water(736,384,upleft), new Water(736,416,upleftreverse), new Water(736,448), new Water(736,480), new Water(736,512), new Water(736,544), new Water(736,576),
    new Water(768,352,left), new Water(768,384,upleftreverse), new Water(768,416), new Water(768,448), new Water(768,480), new Water(768,512), new Water(768,544), new Water(768,576),

    new Water(768,0,left), new Water(768,32,left), new Water(768,64,left), new Water(768,96,left), new Water(768,128,left), new Water(768,160,left), new Water(768,192,left), new Water(768,224,left), new Water(768,256,left), new Water(768,288,left), new Water(768,320,left),
];

export const wildGrass = [  

];
export const bushes = [
    new Bush(160,32,bush), new Bush(192,64,bush), new Bush(224,96,bush), new Bush(256,128,bush), new Bush(288,160,bush), new Bush(320,192,bush), new Bush(352,224,bush), new Bush(384,224,bush), new Bush(416,224,bush), new Bush(448,192,bush), new Bush(480,160,bush), new Bush(512,128,bush), new Bush(544,96,bush), new Bush(576,64,bush), new Bush(608,32,bush),

    new Bush(448,384,bush), new Bush(480,384,bush), new Bush(512,384,bush), new Bush(544,384,bush), new Bush(576,384,bush),
    new Bush(448,416,bush), new Bush(480,416,bush), new Bush(512,416,bush), new Bush(544,416,bush), new Bush(576,416,bush),
    new Bush(448,448,bush), new Bush(480,448,bush), new Bush(512,448,bush), new Bush(544,448,bush), new Bush(576,448,bush),
    new Bush(448,480,bush), new Bush(480,480,bush), new Bush(512,480,bush), new Bush(544,480,bush), new Bush(576,480,bush),
    new Bush(448,512,bush), new Bush(480,512,bush), new Bush(512,512,bush), new Bush(544,512,bush), new Bush(576,512,bush),

    new Bush(640,128,bush), new Bush(672,128,bush), new Bush(704,128,bush), new Bush(736,128,bush), 
    new Bush(640,160,bush), new Bush(672,160,bush), new Bush(704,160,bush), new Bush(736,160,bush),
    new Bush(640,192,bush), new Bush(672,192,bush), new Bush(704,192,bush), new Bush(736,192,bush),
    new Bush(640,224,bush), new Bush(672,224,bush), new Bush(704,224,bush), new Bush(736,224,bush),

    new Bush(320,32), new Bush(352,32), new Bush(416,32), new Bush(448,32), 
    new Bush(320,64), new Bush(352,64), new Bush(384,64), new Bush(416,64), new Bush(448,64),

    new Bush(128,320,bush), new Bush(160,320,bush), new Bush(192,320,bush), new Bush(224,320,bush), new Bush(256,320,bush), 
    new Bush(128,352,bush), new Bush(160,352,bush), new Bush(192,352,bush), new Bush(224,352,bush), new Bush(256,352,bush),
    new Bush(128,384,bush), new Bush(160,384,bush), new Bush(192,384,bush), new Bush(224,384,bush), new Bush(256,384,bush),	
    new Bush(128,416,bush), new Bush(160,416,bush), new Bush(192,416,bush), new Bush(224,416,bush), new Bush(256,416,bush),

    new Bush(32,160,bush), new Bush(64,160,bush), new Bush(96,160,bush), new Bush(128,160,bush), 
    new Bush(32,192,bush), new Bush(64,192,bush), new Bush(96,192,bush), new Bush(128,192,bush), 
    new Bush(32,224,bush), new Bush(64,224,bush), new Bush(96,224,bush), new Bush(128,224,bush), 
    new Bush(32,256,bush), new Bush(64,256,bush), new Bush(96,256,bush), new Bush(128,256,bush), 
];

export const snowbay = {
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