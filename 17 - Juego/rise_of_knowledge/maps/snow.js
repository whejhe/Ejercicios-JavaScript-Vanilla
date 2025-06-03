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

const tree_snow = "./sprites/resources/tree_snow.png";
const rock_snow = "./sprites/resources/rock_snow.png";
const house_snow = "./sprites/house_snow.png";
const wild = "./sprites/resources/wildSnow.png";
const wildDown = "./sprites/resources/wildSnowDown.png";

/**
 * Esta clase define las listas de entidades que componen el mapa del tutorial.
 * @author Luis Antonio Expósito Sánchez
 */
export const portal = [
    new Portal(650, 300, "desert"),
    new Portal(350, 100, "tutorial")
];
export const rocks = [
    new Rock(760, 570, rock_snow), new Rock(720, 570, rock_snow), new Rock(680, 570, rock_snow), new Rock(640, 570, rock_snow), new Rock(600, 570, rock_snow), new Rock(560, 570, rock_snow),
    new Rock(760, 530, rock_snow), new Rock(760, 490, rock_snow), new Rock(760, 450, rock_snow), new Rock(760, 410, rock_snow), new Rock(760, 370, rock_snow), new Rock(760, 330, rock_snow),
    new Rock(680, 450, rock_snow), new Rock(640, 450, rock_snow),
    new Rock(680, 490, rock_snow), new Rock(640, 490, rock_snow),

];
export const trees = [
    new Tree(0, 0, tree_snow), new Tree(0, 32, tree_snow), new Tree(0, 64, tree_snow), new Tree(0, 96, tree_snow), new Tree(0, 128, tree_snow), new Tree(0, 160, tree_snow), new Tree(0, 192, tree_snow), new Tree(0, 224, tree_snow), new Tree(0, 256, tree_snow), new Tree(0, 288, tree_snow), new Tree(0, 320, tree_snow), new Tree(0, 352, tree_snow), new Tree(0, 384, tree_snow), new Tree(0, 416, tree_snow), new Tree(0, 448, tree_snow), new Tree(0, 480, tree_snow), new Tree(0, 512, tree_snow), new Tree(0, 544, tree_snow), new Tree(0, 576, tree_snow), 
    new Tree(32, 0, tree_snow), new Tree(32, 128, tree_snow), new Tree(32, 160, tree_snow), new Tree(32, 192, tree_snow), new Tree(32, 224, tree_snow), new Tree(32, 256, tree_snow), new Tree(32, 288, tree_snow), new Tree(32, 320, tree_snow), new Tree(32, 352, tree_snow), new Tree(32, 384, tree_snow), new Tree(32, 416, tree_snow), new Tree(32, 448, tree_snow), new Tree(32, 480, tree_snow), new Tree(32, 512, tree_snow), new Tree(32, 544, tree_snow), new Tree(32, 576, tree_snow),
    new Tree(64, 0, tree_snow), new Tree(64, 128, tree_snow), new Tree(64, 224, tree_snow), new Tree(64, 256, tree_snow), new Tree(64, 352, tree_snow), new Tree(64, 384, tree_snow), new Tree(64, 480, tree_snow), new Tree(64, 512, tree_snow), 
    new Tree(96, 0, tree_snow), 
    new Tree(128, 0, tree_snow), new Tree(128, 32, tree_snow), new Tree(128, 64, tree_snow),
    new Tree(160, 0, tree_snow), new Tree(160, 32, tree_snow), new Tree(160, 64, tree_snow),
    new Tree(192, 0, tree_snow), new Tree(192, 32, tree_snow),
    new Tree(224, 0, tree_snow), new Tree(224, 32, tree_snow),
    new Tree(256, 0, tree_snow), new Tree(256, 32, tree_snow), new Tree(256, 64, tree_snow),
    new Tree(288, 0, tree_snow), new Tree(288, 32, tree_snow), new Tree(288, 64, tree_snow),
    new Tree(320, 0, tree_snow), new Tree(320, 32, tree_snow),
    new Tree(352, 0, tree_snow), new Tree(352, 32, tree_snow),
    new Tree(384, 0, tree_snow), new Tree(384, 32, tree_snow), new Tree(384, 64, tree_snow),
    new Tree(416, 0, tree_snow), new Tree(416, 32, tree_snow), new Tree(416, 64, tree_snow),
    new Tree(448, 0, tree_snow), new Tree(448, 32, tree_snow),
    new Tree(480, 0, tree_snow), new Tree(480, 32, tree_snow),
    new Tree(512, 0, tree_snow), new Tree(512, 32, tree_snow), new Tree(512, 64, tree_snow),
    new Tree(544, 0, tree_snow), new Tree(544, 32, tree_snow), new Tree(544, 64, tree_snow),
    new Tree(576, 0, tree_snow), new Tree(576, 32, tree_snow),
    new Tree(608, 0, tree_snow), new Tree(608, 32, tree_snow),
    new Tree(640, 0, tree_snow), new Tree(640, 32, tree_snow), new Tree(640, 64, tree_snow),
    new Tree(672, 0, tree_snow), new Tree(672, 32, tree_snow), new Tree(672, 64, tree_snow),
    new Tree(704, 0, tree_snow), new Tree(704, 32, tree_snow),
    new Tree(736, 0, tree_snow), new Tree(736, 32, tree_snow),
    new Tree(768, 0, tree_snow), new Tree(768, 32, tree_snow),
];
export const houses = [
    new House(300, 200, house_snow), 
    new House(420, 200, house_snow),
    new House(300, 300, house_snow), 
    new House(420, 300, house_snow), 
];
export const teachers = [
    new WoodCutter(64, 64),
    new WiseMan(375, 400),
    new Miner(500, 400),
];
export const wildGrass = [
    new WildGrass(96, 300, wild, wildDown),
    new WildGrass(400, 460, wild, wildDown),
    new WildGrass(500, 128, wild, wildDown),
    new WildGrass(300, 100, wild, wildDown),
    new WildGrass(420, 400, wild, wildDown),
    new WildGrass(500, 300, wild, wildDown),
];
export const bushes = [];
export const floor = [
];

export const snow = {
    grassSpritePath : './sprites/terrain/snow.png',
    portal,
    rocks,
    trees,
    houses,
    teachers,
    bushes,
    wildGrass,
    floor
};