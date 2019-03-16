var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var SwitchComponent = /** @class */ (function () {
    function SwitchComponent() {
        this.switchClicked = new EventEmitter();
        this.imgPath = 'assets/img/switch-off.png';
        this.state = false;
    }
    SwitchComponent.prototype.ngOnInit = function () {
    };
    SwitchComponent.prototype.change = function (event) {
        if (this.state === false) {
            this.state = true;
            this.imgPath = 'assets/img/switch-on.png';
        }
        else {
            this.state = false;
            this.imgPath = 'assets/img/switch-off.png';
        }
        this.switchClicked.emit(this.switchID);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], SwitchComponent.prototype, "switchClicked", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "switchID", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SwitchComponent.prototype, "group", void 0);
    SwitchComponent = __decorate([
        Component({
            selector: 'app-switch',
            templateUrl: './switch.component.html',
            styleUrls: ['./switch.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], SwitchComponent);
    return SwitchComponent;
}());
export { SwitchComponent };
//# sourceMappingURL=switch.component.js.map