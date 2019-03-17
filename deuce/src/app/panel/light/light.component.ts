import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})

// Light graphics downloaded from https://openclipart.org/detail/246411/white-dome-light-off
// and https://openclipart.org/detail/246410/red-dome-light-on
// with permission under Creative Commons Zero 1.0 Public Domain License.

export class LightComponent implements OnInit {
  @Input() lightID: string;
  state: boolean;
  imgPath: string;

  constructor() {
    this.imgPath = 'assets/img/DomeLight_offWhite.png';
    this.state = false;
  }

  getLightID() {
    return this.lightID;
  }

  ngOnInit() {}

}
