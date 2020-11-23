import { Quirk } from "../../Quirk";
import { QuirkMutator } from "@/quirks/QuirkMutator";

export class Aradia extends Quirk {
    dead: QuirkMutator;

    constructor() {
        super("Aradia Medigo");
        this.dead = this.addMutator("Dead Quirk", "Aradia's typing quirk used when she is dead (o --> 0).", true);
    }

    quirkify(): void {
        this.lowerCase();
        if (this.dead.isChecked()) {
            this.replaceString("o", "0");

            if (Math.random() <= 0.1) {
                this.suffix(" ribbit");
            }
        }
    }
}