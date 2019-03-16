var Register = /** @class */ (function () {
    function Register(size) {
        this.storage = new Array(size);
    }
    // moves contents of register to destination register
    Register.prototype.move = function (destination) {
        destination.storage = this.storage;
        for (var _i = 0, _a = this.storage; _i < _a.length; _i++) {
            var word = _a[_i];
            word.decimal = 0;
        }
    };
    return Register;
}());
//# sourceMappingURL=Register.js.map