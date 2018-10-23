import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  off = window.location.href + 'src/assets/img/switch-off.png';
  on = window.location.href + 'src/assets/img/switch-on.png';

  change(event: any) {
    const imgElement = <HTMLImageElement>document.getElementById('switch');
    if (imgElement.src === this.off) {
      imgElement.src = this.on;
      console.log('ON');
    } else {
      imgElement.src = this.off;
      console.log('OFF');
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
