import { Component, OnInit, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { LightComponent } from '../light/light.component';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  @Output() switchClicked = new EventEmitter<any>();
  @Input() switchID: string;
  imgPath: string;
  state: boolean;

  constructor() {
    this.imgPath = 'assets/img/switch-off.png';
    this.state = false;
  }

  ngOnInit() {
  }

  change(event: any) {

    if (this.state === false) {
      this.state = true;
      this.imgPath = 'assets/img/switch-on.png';
    } else {
      this.state = false;
      this.imgPath = 'assets/img/switch-off.png';
    }

    this.switchClicked.emit(this.switchID);
  }

}
