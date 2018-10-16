import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { SwitchComponent } from './switch/switch.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent , SwitchComponent ],
  bootstrap: [ AppComponent ]
})

export class PanelComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
