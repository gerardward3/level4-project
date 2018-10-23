import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.css']
})
export class DialComponent implements OnInit {
  default = window.location.href + 'src/assets/img/sergeybe-Rotary-Dialer.png';
  constructor() { }

  ngOnInit() {
  }

}
