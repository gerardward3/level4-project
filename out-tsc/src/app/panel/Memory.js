var Memory = /** @class */ (function () {
    function Memory() {
        this.stores = [new DelayLine(),
            new DelayLine(),
            new DelayLine(),
            new DelayLine(),
            new DelayLine(),
            new DelayLine(),
            new DelayLine(),
            new DelayLine(),
            new DelayLine(),
            new DelayLine(),
            new DelayLine(),
            new DelayLine(),
            new TemporaryStore(),
            new TemporaryStore(),
            new TemporaryStore(),
            new TemporaryStore(),
            new QuadStore(),
            new QuadStore(),
            new DoubleStore(),
            new DoubleStore(),
            new DoubleStore() // DS21
        ];
    }
    return Memory;
}());
//# sourceMappingURL=Memory.js.map