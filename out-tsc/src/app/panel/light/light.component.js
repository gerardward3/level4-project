var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
var LightComponent = /** @class */ (function () {
    function LightComponent() {
        this.imgPath = 'assets/img/DomeLight_offWhite.png';
        this.state = false;
    }
    LightComponent.prototype.getLightID = function () {
        return this.lightID;
    };
    LightComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], LightComponent.prototype, "lightID", void 0);
    LightComponent = __decorate([
        Component({
            selector: 'app-light',
            templateUrl: './light.component.html',
            styleUrls: ['./light.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], LightComponent);
    return LightComponent;
}());
export { LightComponent };
//# sourceMappingURL=light.component.js.map