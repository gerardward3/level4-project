import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { SwitchComponent } from './panel/switch/switch.component';
import { LightComponent } from './panel/light/light.component';
import { DialComponent } from './panel/dial/dial.component';

@NgModule({
  declarations: [
    AppComponent, PanelComponent, SwitchComponent, LightComponent, DialComponent
  ],
  imports: [
    BrowserModule, FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
