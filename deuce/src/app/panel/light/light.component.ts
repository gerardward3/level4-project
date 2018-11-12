import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
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
