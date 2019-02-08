import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { SwitchComponent } from './panel/switch/switch.component';
import { LightComponent } from './panel/light/light.component';
import { DialComponent } from './panel/dial/dial.component';
import { ClickSwitchComponent } from './panel/click-switch/click-switch.component';
import { InputSwitchComponent } from './panel/input-switch/input-switch.component';
import { OsLightComponent } from './panel/os-light/os-light.component';

@NgModule({
  declarations: [
    AppComponent, PanelComponent, SwitchComponent, LightComponent, DialComponent, ClickSwitchComponent, InputSwitchComponent, OsLightComponent
  ],
  imports: [
    BrowserModule, FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
