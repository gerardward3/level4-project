class Register {
    storage: Array<Word>;

    constructor(size: number) {
        this.storage = new Array<Word>(size);
    }

    // moves contents of register to destination register
    move(destination: Register) {
        destination.storage = this.storage;
        for (const word of this.storage) {
            word.decimal = 0;
            word.binary = '';
        }
    }
}
