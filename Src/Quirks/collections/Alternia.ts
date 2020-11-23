import { Category } from "../Category";

import { Aradia } from "./alternia/Aradia";
import { Tavros } from "./alternia/Tavros";
import { Sollux } from "./alternia/Sollux";
import { Karkat } from "./alternia/Karkat";
import { Nepeta } from "./alternia/Nepeta";
import { Kanaya } from "./alternia/Kanaya";
import { Terezi } from "./alternia/Terezi";
import { Vriska } from "./alternia/Vriska";
import { Equius } from "./alternia/Equius";
import { Gamzee } from "./alternia/Gamzee";
import { Eridan } from "./alternia/Eridan";
import { Feferi } from "./alternia/Feferi";

export class Alternia extends Category {
    constructor() {
        super("Alternia");

        this.quirks.push(new Aradia());
        this.quirks.push(new Tavros());
        this.quirks.push(new Sollux());
        this.quirks.push(new Karkat());
        this.quirks.push(new Nepeta());
        this.quirks.push(new Kanaya());
        this.quirks.push(new Terezi());
        this.quirks.push(new Vriska());
        this.quirks.push(new Equius());
        this.quirks.push(new Gamzee());
        this.quirks.push(new Eridan());
        this.quirks.push(new Feferi());
    }
}