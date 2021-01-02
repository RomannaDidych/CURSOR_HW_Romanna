import {pricePen} from "./modules/HW_01_05/script_01.js";
import {priceBook} from "./modules/HW_01_05/script_01.js";
import {priceToy} from "./modules/HW_01_05/script_01.js";
import {formateName} from "./modules/HW_01_05/script_03.js";
import {generateCombinations} from "./modules/HW_01_05/script_05.js";
import "./modules/HW_06_10/style_09.css";
import "./modules/HW_06_10/style_10.css";
import {blocksNumber} from "./modules/HW_06_10/script_09.js";
import {getRandomColor} from "./modules/HW_06_10/script_09.js";
import {generateBlock} from "./modules/HW_06_10/script_09.js";
import {generateBlocks} from "./modules/HW_06_10/script_09.js";
import {buttonArr} from "./modules/HW_06_10/script_10.js";
import {melodyArr} from "./modules/HW_06_10/script_10.js";
import {connectBtnWithAudio} from "./modules/HW_06_10/script_10.js";
import {connectPressedBtnWithAudio} from "./modules/HW_06_10/script_10.js";

const maxPrice = Math.max(pricePen, priceBook, priceToy);
console.log(maxPrice);
const name = 'sAnta';
console.log(formateName(name));
const word = 'word';
console.log(generateCombinations(word));

generateBlocks(blocksNumber);
const blocks = document.querySelectorAll('.block');
const delay = 1000;
let intID = setInterval(() => blocks.forEach((block) => block.style.backgroundColor = getRandomColor()),delay);

buttonArr.forEach((btn) => btn.addEventListener("click", connectBtnWithAudio));
document.addEventListener("keydown", connectPressedBtnWithAudio);