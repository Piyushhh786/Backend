//index.js is very special name 
import { apple } from './apple';
let Banana = require('./banana');
let orange = require('./orange');

let fruits = [apple, Banana, orange];
module.exports = fruits;