import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {
  off = 'src/assets/img/switch-off.png';
  on = 'src/assets/img/switch-on.png';

  change(event: any) {
    const imgElement = <HTMLImageElement>document.getElementById('switch');
    console.log(imgElement.src);

    if (imgElement.src === this.off) {
      imgElement.src = this.on;
      console.log('ON');
    } else {
      imgElement.src = this.on;
      console.log('OFF');
    }

  }
  constructor() { }

  ngOnInit() {
  }

}
