import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  @Input() switchID: string;
  imgPath: string;
  state: boolean;

  constructor() {

  }

  ngOnInit() {
    this.imgPath = window.location.href + 'src/assets/img/switch-off.png';
    this.state = false;
  }

  change(event: any) {
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
