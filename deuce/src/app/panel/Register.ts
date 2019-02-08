export class Register {
    storage: Array<number>;

    constructor(size: number) {
        this.storage = new Array<number>(size);
    }

    // moves contents of register to destination register
    /** move(destination: Register) {
        destination.storage = this.storage;
        for (const word of this.storage) {
            word.decimal = 0;
        }
    } */
}
