import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { NgModule } from '@angular/core';
import { SwitchComponent } from './switch/switch.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { LightComponent } from './light/light.component';
import { ngDevModeResetPerfCounters } from '@angular/core/src/render3/ng_dev_mode';

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

  readInstruction() {
    let total = 0;
    let counter = 1;
    for (const light of this.lights.toArray()) {
      if (light.state === true) {
        total += counter;
      }
      counter *= 2;
    }
    return total;
  }
  switchClicked(event: any) {
    const current = this.lights.find(light => light.lightID === event);
    console.log(event);

    if (event === 'singleShot') {
      let instruction = this.readInstruction();
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
