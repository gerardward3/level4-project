var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChildren, QueryList } from '@angular/core';
import { NgModule } from '@angular/core';
import { SwitchComponent } from './switch/switch.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { LightComponent } from './light/light.component';
import { ClickSwitchComponent } from './click-switch/click-switch.component';
var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    PanelComponent.prototype.readInstruction = function () {
        var total = 0;
        var counter = 1;
        for (var _i = 0, _a = this.lights.toArray(); _i < _a.length; _i++) {
            var light = _a[_i];
            if (light.state === true) {
                total += counter;
            }
            counter *= 2;
        }
        return total;
    };
    PanelComponent.prototype.switchClicked = function (event) {
        var current = this.lights.find(function (light) { return light.lightID === event; });
        var clickSwitch = this.clickSwitch.find(function (singleShot) { return clickSwitch.switchID === event; });
        console.log(clickSwitch);
        if (event === 'singleShot') {
            var instruction = this.readInstruction();
            instruction += 2;
        }
        if (current.state === false) {
            current.state = true;
            current.imgPath = 'assets/img/DomeLight_onRed.png';
        }
        else {
            current.state = false;
            current.imgPath = 'assets/img/DomeLight_offWhite.png';
        }
    };
    __decorate([
        ViewChildren(LightComponent),
        __metadata("design:type", QueryList)
    ], PanelComponent.prototype, "lights", void 0);
    __decorate([
        ViewChildren(ClickSwitchComponent),
        __metadata("design:type", QueryList)
    ], PanelComponent.prototype, "clickSwitch", void 0);
    PanelComponent = __decorate([
        Component({
            selector: 'app-panel',
            templateUrl: './panel.component.html',
            styleUrls: ['./panel.component.css']
        }),
        NgModule({
            imports: [BrowserModule],
            declarations: [AppComponent, SwitchComponent],
            bootstrap: [AppComponent]
        }),
        __metadata("design:paramtypes", [])
    ], PanelComponent);
    return PanelComponent;
}());
export { PanelComponent };
//# sourceMappingURL=panel.component.js.map