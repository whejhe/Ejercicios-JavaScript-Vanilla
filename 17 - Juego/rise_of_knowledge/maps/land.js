//Declaramos las dependencias a usar.
import { Tree } from "../entities/tree.js";
import { Rock } from "../entities/rock.js";
import { House } from "../entities/house.js";
import { WoodCutter } from "../entities/woodcutter.js";
import { WildGrass } from "../entities/wildGrass.js";
import { Portal } from "../entities/portal.js";
import { Water } from "../entities/water.js";
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
 * Esta clase define las listas de entidades que componen el mapa del tutorial.
 * @author Luis Antonio Expósito Sánchez
 */
export const portal = [
    new Portal(0, 288, "forest", 736, 288),
    new Portal(384, 576, "town", 384, 32),
];
export const rocks = [
    new Rock(128,128), new Rock(128, 160), new Rock(160,128),
    new Rock(224,448),
    new Rock(608,256), new Rock(608,320), 
    new Rock(96,480), new Rock(128,480),
    new Rock(608,96), new Rock(640,96), new Rock(672,96), new Rock(640,128), new Rock(672,128),

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
    new Tree(736, 256), new Tree(768, 256),
    new Tree(0, 256), new Tree(32, 256), new Tree(736, 288), new Tree(768, 288),
    new Tree(0, 320), new Tree(32, 320), new Tree(736, 320), new Tree(768, 320),
    new Tree(0, 352), new Tree(32, 352), new Tree(736, 352), new Tree(768, 352),
    new Tree(0, 384), new Tree(32, 384), new Tree(736, 384), new Tree(768, 384),
    new Tree(0, 416), new Tree(32, 416), new Tree(736, 416), new Tree(768, 416),
    new Tree(0, 448), new Tree(32, 448), new Tree(736, 448), new Tree(768, 448),
    new Tree(0, 480), new Tree(32, 480), new Tree(736, 480), new Tree(768, 480),
    new Tree(0, 512), new Tree(32, 512), new Tree(736, 512), new Tree(768, 512),
    new Tree(0, 544), new Tree(32, 544), new Tree(64, 544), new Tree(96, 544), new Tree(128, 544), new Tree(160, 544), new Tree(192, 544), new Tree(224, 544), new Tree(256, 544), new Tree(288, 544), new Tree(320, 544), new Tree(352, 544), new Tree(416, 544), new Tree(448, 544), new Tree(480, 544), new Tree(512, 544), new Tree(544, 544), new Tree(576, 544), new Tree(608, 544), new Tree(640, 544), new Tree(672, 544), new Tree(704, 544), new Tree(736, 544), new Tree(768, 544),
    new Tree(0, 576), new Tree(32, 576), new Tree(64, 576), new Tree(96, 576), new Tree(128, 576), new Tree(160, 576), new Tree(192, 576), new Tree(224, 576), new Tree(256, 576), new Tree(288, 576), new Tree(320, 576), new Tree(352, 576), new Tree(416, 576), new Tree(448, 576), new Tree(480, 576), new Tree(512, 576), new Tree(544, 576), new Tree(576, 576), new Tree(608, 576), new Tree(640, 576), new Tree(672, 576), new Tree(704, 576), new Tree(736, 576), new Tree(768, 576),
];
export const houses = [
];
export const teachers = [
];

export const waters = [
    new Water(576,416, [upLeft1, upLeft2]), new Water(608,416, [up1, up2]), new Water(640,416, [up1, up2]), new Water(672,416,[up1, up2]), new Water(704,416, [upRight1, upRight2]),
    new Water(576, 448, [left1, left2]), new Water(608,448, [water1, water2, ]), new Water(640,448, [water1, water2, ]), new Water(672,448, [water1, water2, ]), new Water(704,448, [right1,right2]),
    new Water(576, 480, [left1, left2]), new Water(608,480, [water1, water2, ]), new Water(640,480, [water1, water2, ]), new Water(672,480, [water1, water2, ]), new Water(704,480, [right1,right2]),
    new Water(576, 512, [downLeft1, downLeft2]), new Water(608,512, [down1, down2]), new Water(640,512, [down1, down2]), new Water(672,512, [down1, down2]), new Water(704,512, [downRight1,downRight2]),

    new Water(256,128, [upLeft1, upLeft2, ]), new Water(288,128, [up1, up2]), new Water(320,128, [up1, up2]), new Water(352,128,[up1, up2]), new Water(384,128,[up1, up2]),new Water(416,128,[up1, up2]), new Water(448,128, [upRight1, upRight2]),
    new Water(256, 160, [left1, left2]), new Water(288,160, [water1, water2, ]), new Water(320,160, [water1, water2, ]), new Water(352,160, [water1, water2, ]),new Water(384,160, [water1, water2, ]),new Water(416,160, [water1, water2, ]), new Water(448,160, [right1,right2]),
    new Water(256, 192, [left1, left2]), new Water(288,192, [water1, water2, ]), new Water(320,192, [water1, water2, ]), new Water(352,192, [water1, water2, ]),new Water(384,192, [water1, water2, ]),new Water(416,192, [water1, water2, ]), new Water(448,192, [right1,right2]),
    new Water(256, 224, [left1, left2]), new Water(288,224, [water1, water2, ]), new Water(320,224, [water1, water2, ]), new Water(352,224, [water1, water2, ]),new Water(384,224, [water1, water2, ]),new Water(416,224, [water1, water2, ]), new Water(448,224, [right1,right2]),
    new Water(256, 256, [downLeft1, downLeft2]), new Water(288,256, [down1, down2]), new Water(320,256, [down1, down2]), new Water(352,256, [down1, down2]), new Water(384,256, [down1, down2]),new Water(416,256, [down1, down2]),new Water(448,256, [downRight1,downRight2]),
];
export const wildGrass = [
    new WildGrass(64, 64), new WildGrass(96, 64), new WildGrass(128, 64), new WildGrass(160, 64), new WildGrass(192, 64), new WildGrass(224, 64), new WildGrass(256, 64), new WildGrass(288, 64), new WildGrass(320, 64), new WildGrass(352, 64), new WildGrass(384, 64), new WildGrass(416, 64), new WildGrass(448, 64), new WildGrass(480, 64), new WildGrass(512, 64), new WildGrass(544, 64), new WildGrass(576, 64), new WildGrass(608, 64), new WildGrass(640, 64), new WildGrass(672, 64), new WildGrass(704, 64), 
    new WildGrass(64, 96), new WildGrass(96, 96), new WildGrass(128, 96), new WildGrass(160, 96), new WildGrass(192, 96), new WildGrass(224, 96), new WildGrass(256, 96), new WildGrass(288, 96), new WildGrass(320, 96), new WildGrass(352, 96), new WildGrass(384, 96), new WildGrass(416, 96), new WildGrass(448, 96), new WildGrass(480, 96), new WildGrass(512, 96), new WildGrass(544, 96), new WildGrass(576, 96), new WildGrass(704, 96),
    new WildGrass(64, 128), new WildGrass(96, 128), new WildGrass(192, 128), new WildGrass(224, 128), new WildGrass(480, 128), new WildGrass(704, 128),
    new WildGrass(64, 160), new WildGrass(96, 160), new WildGrass(160, 160), new WildGrass(192, 160), new WildGrass(224, 160), new WildGrass(480, 160), new WildGrass(640, 160), new WildGrass(672, 160), new WildGrass(704, 160),
    new WildGrass(64, 192), new WildGrass(96, 192), new WildGrass(128, 192), new WildGrass(160, 192), new WildGrass(192, 192), new WildGrass(224, 192), new WildGrass(480, 192), new WildGrass(640, 192), new WildGrass(672, 192), new WildGrass(704, 192),
    new WildGrass(64, 224), new WildGrass(96, 224), new WildGrass(128, 224), new WildGrass(160, 224), new WildGrass(192, 224), new WildGrass(224, 224), new WildGrass(480, 224), new WildGrass(512, 224), new WildGrass(544, 224), new WildGrass(576, 224), new WildGrass(608, 224), new WildGrass(640, 224), new WildGrass(672, 224), new WildGrass(704, 224),
    new WildGrass(64, 256), new WildGrass(96, 256), new WildGrass(128, 256), new WildGrass(160, 256), new WildGrass(192, 256), new WildGrass(224, 256), new WildGrass(480, 256), new WildGrass(512, 256), new WildGrass(544, 256), new WildGrass(576, 256), new WildGrass(640, 256), new WildGrass(672, 256), new WildGrass(704, 256),
    new WildGrass(64, 320), new WildGrass(96, 320), new WildGrass(128, 320), new WildGrass(160, 320), new WildGrass(192, 320), new WildGrass(224, 320), new WildGrass(480, 320), new WildGrass(512, 320), new WildGrass(544, 320), new WildGrass(576, 320), new WildGrass(640, 320), new WildGrass(672, 320), new WildGrass(704, 320),
    new WildGrass(64, 352), new WildGrass(96, 352), new WildGrass(128, 352), new WildGrass(160, 352), new WildGrass(192, 352), new WildGrass(224, 352), new WildGrass(256, 352), new WildGrass(288, 352), new WildGrass(320, 352), new WildGrass(448, 352), new WildGrass(480, 352), new WildGrass(512, 352), new WildGrass(544, 352), new WildGrass(576, 352), new WildGrass(608, 352), new WildGrass(640, 352), new WildGrass(672, 352), new WildGrass(704, 352),
    new WildGrass(64, 384), new WildGrass(96, 384), new WildGrass(128, 384), new WildGrass(160, 384), new WildGrass(192, 384), new WildGrass(224, 384), new WildGrass(544, 384), new WildGrass(576, 384), new WildGrass(608, 384), new WildGrass(640, 384), new WildGrass(672, 384), new WildGrass(704, 384),
    new WildGrass(64, 416), new WildGrass(96, 416), new WildGrass(128, 416), new WildGrass(160, 416), new WildGrass(192, 416), new WildGrass(224, 416), new WildGrass(544, 416), 
    new WildGrass(64, 448), new WildGrass(96, 448), new WildGrass(128, 448), new WildGrass(160, 448), new WildGrass(192, 448), new WildGrass(544, 448), 
    new WildGrass(64, 480), new WildGrass(160, 480), new WildGrass(192, 480), new WildGrass(224, 480), new WildGrass(544, 480), 
    new WildGrass(64, 512), new WildGrass(96, 512), new WildGrass(128, 512), new WildGrass(160, 512), new WildGrass(192, 512), new WildGrass(224, 512), new WildGrass(256, 512), new WildGrass(288, 512), new WildGrass(320, 512), new WildGrass(352, 512), new WildGrass(416, 512), new WildGrass(448, 512), new WildGrass(480, 512), new WildGrass(512, 512), new WildGrass(544, 512), 
];
export const bushes = [
    new Bush(512, 128), new Bush(544, 128), new Bush(576, 128), new Bush(608, 128),
    new Bush(512, 160), new Bush(544, 160), new Bush(576, 160), new Bush(608, 160),
    new Bush(512, 192), new Bush(544, 192), new Bush(576, 192), new Bush(608, 192),

    new Bush(256, 384), new Bush(256, 416), new Bush(256, 448), new Bush(256, 480), 
    new Bush(288,384), new Bush(288,416), new Bush(288,448), new Bush(288,480),
    new Bush(320,384), new Bush(320,416), new Bush(320,448), new Bush(320,480),
    new Bush(352,384), new Bush(352,416), new Bush(352,448), new Bush(352,480), 
    new Bush(416,384), new Bush(416,416), new Bush(416,448), new Bush(416,480), 
    new Bush(448,384), new Bush(448,416), new Bush(448,448), new Bush(448,480), 
    new Bush(480,384), new Bush(480,416), new Bush(480,448), new Bush(480,480),
    new Bush(512,384), new Bush(512,416), new Bush(512,448), new Bush(512,480),
];
export const floor = [
    new Floor(0,288,path), new Floor(32,288, path), new Floor(64,288, path), new Floor(96,288, path), new Floor(128,288, path), new Floor(160,288, path), new Floor(192,288, path), new Floor(224,288, path), new Floor(256,288, path), new Floor(288,288, path), new Floor(320,288, path), 
    new Floor(352,288, path), new Floor(384,288, path), new Floor(416,288, path), 
    new Floor(448,288, path), new Floor(480,288, path), new Floor(512,288, path), 
    new Floor(384,320, path), new Floor(384,352, path), new Floor(384,384, path), new Floor(384,416, path), new Floor(384,448, path), new Floor(384,480, path), new Floor(384,512, path), new Floor(384,544, path), new Floor(384,576,path),
    new Floor(320,320,path), new Floor(352,320, path), new Floor(416,320, path), new Floor(448,320, path), 
    new Floor(352,352, path), new Floor(416,352, path),
];

export const land = {
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