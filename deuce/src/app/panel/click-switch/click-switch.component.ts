import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-click-switch',
  templateUrl: './click-switch.component.html',
  styleUrls: ['./click-switch.component.css']
})
export class ClickSwitchComponent implements OnInit {

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

    this.state = true;
    this.imgPath = 'assets/img/switch-on.png';
    this.state = false;
    this.imgPath = 'assets/img/switch-off.png';

    this.switchClicked.emit(this.switchID);
  }

}
