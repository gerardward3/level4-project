import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { NgModule } from '@angular/core';
import { SwitchComponent } from './switch/switch.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { LightComponent } from './light/light.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent , SwitchComponent ],
  bootstrap: [ AppComponent ]
})

export class PanelComponent implements OnInit {
  @ViewChildren(LightComponent) lights: QueryList<LightComponent>;
  memory: Memory;

  constructor() {
  }

  ngOnInit() {
  }

  switchClicked(event: any) {
    const current = this.lights.find(light => light.lightID === event);

    if (event === 'singleShot') {
      
    }
    if (current.state === false) {
      current.state = true;
      current.imgPath = 'assets/img/DomeLight_onRed.png';
    } else {
      current.state = false;
      current.imgPath = 'assets/img/DomeLight_offWhite.png';
    }
  }
}
