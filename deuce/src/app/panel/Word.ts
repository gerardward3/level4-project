class Word {
    decimal: number;
    binary: String;

    constructor() {
        this.decimal = 0;
        this.binary = (+this.decimal).toString(2);
    }
}
