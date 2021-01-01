import {pricePen} from "./modules/HW_01_05/script_01.js";
import {priceBook} from "./modules/HW_01_05/script_01.js";
import {priceToy} from "./modules/HW_01_05/script_01.js";

import {formateName} from "./modules/HW_01_05/script_03.js";
//import "./style.css";

const maxPrice = Math.max(pricePen, priceBook, priceToy);
console.log(maxPrice);
const name = 'sAnta';
console.log(formateName(name));