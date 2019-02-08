import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-switch',
  templateUrl: './input-switch.component.html',
  styleUrls: ['./input-switch.component.css']
})
export class InputSwitchComponent implements OnInit {
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
