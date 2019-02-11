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
    this.imgPath = 'assets/img/switch-on.png';
    this.state = true;
  }

  ngOnInit() {
  }


  change(event: any) {
    this.imgPath = 'assets/img/switch-off.png';
    this.state = false;
    setTimeout(() => {
      this.state = true;
      this.imgPath = 'assets/img/switch-on.png';
    }, 500);
    this.switchClicked.emit(this.switchID);
  }

}
