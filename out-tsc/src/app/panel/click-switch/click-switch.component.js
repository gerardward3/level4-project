var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Output, Input, EventEmitter } from '@angular/core';
var ClickSwitchComponent = /** @class */ (function () {
    function ClickSwitchComponent() {
        this.switchClicked = new EventEmitter();
        this.imgPath = 'assets/img/switch-off.png';
        this.state = false;
    }
    ClickSwitchComponent.prototype.ngOnInit = function () {
    };
    ClickSwitchComponent.prototype.change = function (event) {
        this.state = true;
        this.imgPath = 'assets/img/switch-on.png';
        this.state = false;
        this.imgPath = 'assets/img/switch-off.png';
        this.switchClicked.emit(this.switchID);
    };
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], ClickSwitchComponent.prototype, "switchClicked", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ClickSwitchComponent.prototype, "switchID", void 0);
    ClickSwitchComponent = __decorate([
        Component({
            selector: 'app-click-switch',
            templateUrl: './click-switch.component.html',
            styleUrls: ['./click-switch.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], ClickSwitchComponent);
    return ClickSwitchComponent;
}());
export { ClickSwitchComponent };
//# sourceMappingURL=click-switch.component.js.map