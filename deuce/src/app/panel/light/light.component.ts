import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light',
  templateUrl: './light.component.html',
  styleUrls: ['./light.component.css']
})
export class LightComponent implements OnInit {
  off = window.location.href + 'src/assets/img/DomeLight_offWhite.png';
  constructor() { }

  ngOnInit() {
  }

}
