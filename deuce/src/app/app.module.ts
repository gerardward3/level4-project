import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { SwitchComponent } from './switch/switch.component';

@NgModule({
  declarations: [
    AppComponent, PanelComponent, SwitchComponent
  ],
  imports: [
    BrowserModule, FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
