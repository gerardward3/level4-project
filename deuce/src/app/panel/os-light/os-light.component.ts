import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-os-light',
  templateUrl: './os-light.component.html',
  styleUrls: ['./os-light.component.css']
})
export class OsLightComponent implements OnInit {
  @Input() lightID: string;
  state: boolean;
  imgPath: string;

  constructor() {
    this.imgPath = 'assets/img/DomeLight_offWhite.png';
    this.state = false;
  }

  ngOnInit() {
  }

}
