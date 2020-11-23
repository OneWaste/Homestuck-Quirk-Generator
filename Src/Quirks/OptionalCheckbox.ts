export class OptionalCheckbox {
    label: string;
    hoverHint: string;
    defaultValue: boolean;

    constructor(label: string, title: string, defaultValue = false) {
        this.label = label;
        this.hoverHint = title;
        this.defaultValue = defaultValue;
    }
}