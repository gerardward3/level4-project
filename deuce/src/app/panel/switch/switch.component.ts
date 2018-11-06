import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LightComponent } from '../light/light.component';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  @ViewChild(LightComponent) light: LightComponent;
  @Input() switchID: string;
  imgPath: string;
  state: boolean;

  constructor() {

  }

  ngOnInit() {
    this.imgPath = window.location.href + 'src/assets/img/switch-off.png';
    this.state = false;
    this.light = new LightComponent;
  }

  change(event: any) {
    this.light.lightID = this.switchID;
    this.light.imgPath = window.location.href + 'src/assets/img/DomeLight_onRed.png';

    if (this.state === false) {
      this.state = true;
      this.imgPath = window.location.href + 'src/assets/img/switch-on.png';
    } else {
      this.state = false;
      this.imgPath = window.location.href + 'src/assets/img/switch-off.png';
    }

    console.log(this.switchID);
    console.log(this.state);
  }

}
