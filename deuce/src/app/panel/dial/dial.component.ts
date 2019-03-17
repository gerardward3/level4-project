import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dial',
  templateUrl: './dial.component.html',
  styleUrls: ['./dial.component.css']
})

// Dial graphic downloaded from https://openclipart.org/detail/26255/rotary-dialer
// with permission under Creative Commons Zero 1.0 Public Domain License.

export class DialComponent implements OnInit {
  default = 'assets/img/sergeybe-Rotary-Dialer.png';
  constructor() { }

  ngOnInit() {
  }

}
