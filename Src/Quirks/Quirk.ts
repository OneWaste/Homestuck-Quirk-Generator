import { QuirkMutator } from "@/quirks/QuirkMutator";

export abstract class Quirk {
    static inputField: HTMLTextAreaElement;
    static textFields: HTMLFieldSetElement;

    private readonly name: string;
    private shortName: string;
    private id: string;
    private readonly colorClass: string;
    private inputText: string;

    optionalCheckboxes: Array<QuirkMutator>;

    protected constructor(name: string, colorClass = "") {
        this.name = name;
        const spaceIndex = this.name.indexOf(" ");
        this.shortName = spaceIndex > 0 ? this.name.substr(0, spaceIndex) : name;

        this.id = this.shortName.toLocaleLowerCase();
        this.optionalCheckboxes = new Array<QuirkMutator>();
        this.colorClass = colorClass.length < 1 ? this.id : colorClass;

        this.inputText = "";
    }

    public getID(): string {
        return this.id;
    }

    public setShortName(bruh: string): void {
        this.shortName = bruh;
        this.id = bruh.toLocaleLowerCase();
    }

    public getShortName(): string {
        return this.shortName;
    }

    public getColorClass(): string {
        return this.colorClass;
    }

    addMutator(label: string, title: string, defaultValue = false): QuirkMutator {
        const mutator: QuirkMutator = new QuirkMutator(label, title, defaultValue);
        this.optionalCheckboxes.push(mutator);
        return mutator;
    }

    abstract quirkify(): void;

    protected lowerCase(pattern = ""): void {
        if (pattern.length < 1) {
            this.inputText = this.inputText.toLocaleLowerCase();
        } else {
            const reg = new RegExp(pattern, "gi");
            this.inputText = this.inputText.replace(reg, function(match) {
                return match.toLocaleLowerCase();
            });
        }
    }

    protected upperCase(pattern = ""): void {
        if (pattern.length < 1) {
            this.inputText = this.inputText.toLocaleUpperCase();
        } else {
            const reg = new RegExp(pattern, "gi");
            this.inputText = this.inputText.replace(reg, function(match) {
                return match.toLocaleUpperCase();
            });
        }
    }

    protected prefix(str: string): void {
        this.inputText = str + this.inputText;
    }

    protected suffix(str: string): void {
        this.inputText += str;
    }

    protected replaceString(pattern: string, replace: string): void {
        const reg = new RegExp(pattern, "g");
        this.inputText = this.inputText.replace(reg, replace);
    }

    protected replaceCaseInsensitive(pattern: string, replace: string): void {
        const reg = new RegExp(pattern, "gi");
        this.inputText = this.inputText.replace(reg, replace);
    }

    protected replaceMatchCase(pattern: string, replace: string): void {
        const reg = new RegExp(pattern, "gi");
        this.inputText = this.inputText.replace(reg, function(match) {
            return Quirk.matchCase(replace, match);
        });
    }

    protected replaceWord(pattern: string, replace: string): void {
        this.replaceString("\\b" + pattern + "\\b", replace);
    }

    protected replaceWordMatchCase(pattern: string, replace: string): void {
        this.replaceMatchCase("\\b" + pattern + "\\b", replace);
    }

    // Function taken from https://stackoverflow.com/a/17265031/6446221.
    private static matchCase(text: string, pattern: string): string {
        // If the entire text is uppercase then uppercase the whole pattern regardless of lengths.
        if (pattern.toUpperCase() === pattern) {
            return text.toUpperCase();
        }

        let result = "";

        for (let i = 0; i < text.length; i++) {
            const c = text.charAt(i);
            const p = pattern.charCodeAt(i);

            if (p >= 65 && p < 65 + 26) {
                result += c.toUpperCase();
            } else {
                result += c.toLowerCase();
            }
        }

        return result;
    }

    randomReplace(pattern: string, replace: string, prob: number): void {
        const reg = new RegExp(pattern, "g");
        this.inputText = this.inputText.replace(reg, function(match) {
            if (Math.random() <= prob) {
                return replace;
            }
            return match;
        });
    }

    // Troll-specific stuff below.

    // $1 - capture group for eyes.
    // $2 - capture group for mouth.
    replaceEmotes(replace: string): void {
        const eyes = "[:;]";
        const mouth = "[\\)\\(Dd]";
        this.upperCase(`(${eyes})(${mouth})`);

        const reg = new RegExp(`(${eyes})(${mouth})`, "gi");
        this.inputText = this.inputText.replace(reg, replace);
    }

    applyCatPuns(): void {
        this.replaceMatchCase("mother", "meowther");
        this.replaceMatchCase("for", "fur");
        this.replaceMatchCase("pause", "paws");
        this.replaceMatchCase("cause", "claws");
        this.replaceMatchCase("now", "meow");
        this.replaceMatchCase("(per|pre)", "pur");
    }

    applyFishPuns(): void {
        this.replaceMatchCase("kill", "krill");
        this.replaceMatchCase("well", "whale");
        this.replaceMatchCase("fine", "fin");
        this.replaceMatchCase("see", "sea");
        this.replaceMatchCase("should", "shoald");
        this.replaceMatchCase("kid", "squid");
        this.replaceMatchCase("sure", "shore");
        this.replaceMatchCase("crap", "carp");
        this.replaceMatchCase("(what are|what do)", "water");
    }

    applyTiaraEmotes(): void {
        this.replaceEmotes("38$2");
    }

    censorSwears(extreme = false): void {
        this.replaceWordMatchCase("fuck", "f*ck");
        this.replaceWordMatchCase("bitch", "b*tch");
        this.replaceWordMatchCase("shit", "sh*t");
        this.replaceWordMatchCase("damn", "d*mn");
        this.replaceWordMatchCase("crap", "cr*p");

        if (extreme) {
            this.replaceMatchCase("whoops", "wh**ps");
            this.replaceMatchCase("silly", "s*lly");
            this.replaceMatchCase("shoot", "sh**t");
            this.replaceMatchCase("fidging", "f*dging");
        }
    }
}
