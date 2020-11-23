import { Quirk } from "@/quirks/Quirk";

export class Category {
    tabName: string;
    public quirks: Array<Quirk>;
    optionalCheckboxes: Array<HTMLTableRowElement>;

    constructor(tabName: string) {
        this.tabName = tabName;
        this.quirks = new Array<Quirk>();
        this.optionalCheckboxes = new Array<HTMLTableRowElement>();
    }
}

export const list: Array<Category> = new Array<Category>();