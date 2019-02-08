import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { NgModule } from '@angular/core';
import { SwitchComponent } from './switch/switch.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { LightComponent } from './light/light.component';
import { ClickSwitchComponent } from './click-switch/click-switch.component';
import { InputSwitchComponent } from './input-switch/input-switch.component';
import { Memory } from './Memory';
import { OsLightComponent } from './os-light/os-light.component';

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
  @ViewChildren(LightComponent) lights: QueryList<LightComponent>;
  @ViewChildren(ClickSwitchComponent) clickSwitch: QueryList<ClickSwitchComponent>;
  @ViewChildren(InputSwitchComponent) inputSwitches: QueryList<InputSwitchComponent>;
  @ViewChildren(OsLightComponent) OSLights: QueryList<OsLightComponent>;
  memory: Memory;
  readfromID: number;
  lastDestination: number;
  lastInstruction: Array<number>;
  IDtotal: number;

  constructor() {
    this.memory = new Memory();
    this.readfromID = 0;
    this.lastInstruction = null;
    this.lastDestination = 0;
    this.IDtotal = 0;
  }

  ngOnInit() {
  }

  readInstruction() {
    const instruction = [];
    for (const id of this.inputSwitches.toArray()) {
      if (id.state === true) {
        instruction.push(1);
      } else {
        instruction.push(0);
      }
    }
    return instruction;
  }

  processInstruction(instruction) {
    const nis = this.calculateFormat(instruction.slice(1, 3 + 1));
    const source = this.calculateFormat(instruction.slice(4, 8 + 1));
    const destination = this.calculateFormat(instruction.slice(9, 13 + 1));
    const characteristic = this.calculateFormat(instruction.slice(14, 15 + 1));
    const wait = this.calculateFormat(instruction.slice(16, 20 + 1));
    const timing = this.calculateFormat(instruction.slice(25, 29 + 1));

    let go = 0;
    if (instruction[31] === 1) {
      go = 1;
    }

    if (source === 0) {
      this.readfromID = 1;
      this.lastDestination = destination;
    } else {
      if (destination === 25) {
        this.memory.stores[13].storage[0] += this.memory.stores[source].storage[timing];
      } else if (destination === 28) {
        let binaryString = this.createBinaryString(this.memory.stores[source].storage[0]).split('').reverse();
        let lightArray = this.OSLights.toArray();
        for (let i = 0; i < 32; i++) {
          if (binaryString[i] === '1') {
            lightArray[i].state = true;
            lightArray[i].imgPath = 'assets/img/DomeLight_onRed.png';
          }
        }
      } else {
        this.memory.stores[destination].storage[wait] = this.memory.stores[source].storage[timing];
      }
    }

  }
  calculateFormat(instruction) {
    let total = 0;
    let counter = 1;
    for (const bit of instruction) {
      if (bit === 1) {
        total += counter;
      }
      counter *= 2;
    }
    return total;
  }

  createBinaryString (nMask) {
    // nMask must be between -2147483648 and 2147483647
    for (var nFlag = 0, nShifted = nMask, sMask = ""; nFlag < 32) {
      nFlag++, sMask += String(nShifted >>> 31), nShifted <<= 1);
    }
    return sMask;
  }

  switchClicked(event: any) {
    if (event === 'singleShot') {
      const instruction = this.readInstruction();
      if (this.readfromID === 0) {
        this.processInstruction(instruction);
      } else {
        this.IDtotal = this.calculateFormat(instruction);
        if (this.lastDestination < 22) {
          this.memory.stores[this.lastDestination].storage[0] = this.IDtotal;
        }
        this.readfromID = 0;
      }
      this.lastInstruction = instruction;
      console.log(this.memory.stores);
    } else {
      const current = this.lights.find(light => light.lightID === event);
      if (current.state === false) {
        current.state = true;
        current.imgPath = 'assets/img/DomeLight_onRed.png';
      } else {
        current.state = false;
        current.imgPath = 'assets/img/DomeLight_offWhite.png';
      }
    }
  }
}
