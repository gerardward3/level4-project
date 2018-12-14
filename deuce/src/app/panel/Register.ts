class Register {
    storage: Array<Word>;

    constructor(size: number) {
        this.storage = new Array<Word>(size);
    }
}
