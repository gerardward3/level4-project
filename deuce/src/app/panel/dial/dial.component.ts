import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.css']
})
export class DialComponent implements OnInit {
  default = 'assets/img/sergeybe-Rotary-Dialer.png';
  constructor() { }

  ngOnInit() {
  }

}
