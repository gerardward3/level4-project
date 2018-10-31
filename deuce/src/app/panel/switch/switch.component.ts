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
    console.log(event);
    const imgElement = <HTMLImageElement>document.getElementById('switch');
    console.log(imgElement);
    imgElement.src = (imgElement.src === this.off) ? (this.on) : (this.off);

  }
  constructor() { }

  ngOnInit() {
  }

}
