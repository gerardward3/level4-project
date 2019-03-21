import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-os-light',
  templateUrl: './os-light.component.html',
  styleUrls: ['./os-light.component.css']
})

// Light graphics downloaded from https://openclipart.org/detail/246411/white-dome-light-off
// and https://openclipart.org/detail/246410/red-dome-light-on
// with permission under Creative Commons Zero 1.0 Public Domain License.

export class OsLightComponent implements OnInit {
  @Input() lightID: string;
  state: boolean;
  imgPath: string;

  constructor() {
    this.imgPath = 'assets/img/domelight_offwhite.png';
    this.state = false;
  }

  ngOnInit() {
  }

}
