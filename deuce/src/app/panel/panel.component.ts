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
  dlIndex: number;

  constructor() {
    this.memory = new Memory();
    this.readfromID = 0;
    this.lastInstruction = null;
    this.lastDestination = 0;
    this.IDtotal = 0;
  }

  ngOnInit() {
    this.dlIndex = 0;
    setInterval(() => {
      this.dlIndex = (this.dlIndex + 1) % 32;
    }, 500);
    this.memory.stores[1].storage[0] = 2181045682;
    this.memory.stores[1].storage[1] = 2214607586;
    this.memory.stores[1].storage[2] = 2248154498;
    this.memory.stores[1].storage[3] = 2281716450;
    this.memory.stores[1].storage[4] = 2315263362;
    this.memory.stores[1].storage[5] = 2348825314;
    //this.memory.stores[1].storage[6] =

  }

  readInstructionfromPanel() {
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

  readInstruction(decimal) {
    const binArray = [];
    let k = 0;
    for (let i = 31; i >= 0; i--) {
      k = decimal >> i; 
      if (k & 1) { 
          binArray.unshift(1);
      } else {
          binArray.unshift(0);
      }
    }
    return binArray;
  }

  processInstruction(instruction) {
    console.log(instruction);
    const nis = this.calculateFormat(instruction.slice(1, 3 + 1));
    const source = this.calculateFormat(instruction.slice(4, 8 + 1));
    const destination = this.calculateFormat(instruction.slice(9, 13 + 1));
    const characteristic = this.calculateFormat(instruction.slice(14, 15 + 1));
    const wait = this.calculateFormat(instruction.slice(16, 20 + 1));
    let timing = this.calculateFormat(instruction.slice(25, 29 + 1));

    let go = 0;
    if (instruction[31] === 1) {
      go = 1;
    }

    if (source === 0) {
      console.log('hello');
      this.readfromID = 1;
      this.lastDestination = destination;
      return;
    } else if (source === 23) {
      this.memory.stores[14].storage[0] = this.memory.stores[destination].storage[0] / 2;
    } else if (source === 24) {
      this.memory.stores[14].storage[0] = this.memory.stores[destination].storage[0] * 2;
    } else if (source === 27) {
      this.memory.stores[destination].storage[0] = 1;
    } else if (source === 28) {
      this.memory.stores[destination].storage[0] = 2 ** 16;
    } else if (source === 29) {
      this.memory.stores[destination].storage[0] = 2 ** 31;
    } else if (source === 30) {
      this.memory.stores[destination].storage[0] = 0;
    } else if (source === 31) {
      this.memory.stores[destination].storage[0] = -1;
    }

    if (destination === 25) {
        this.memory.stores[13].storage[0] += this.memory.stores[source].storage[wait];
    } else if (destination === 26) {
        this.memory.stores[13].storage[0] -= this.memory.stores[source].storage[wait];
    } else if (destination === 27) {
        if (this.memory.stores[source].storage[0] < 0) {
          timing += 1;
        }
    } else if (destination === 28) {
      if (this.memory.stores[source].storage[0] !== 0) {
        timing += 1;
      }
    } else if (destination === 29) {
      const word = this.memory.stores[source].storage[0];
      this.displayWord(word);
    }

    if (source <= 22 && destination <= 22) {
      this.memory.stores[destination].storage[wait] = this.memory.stores[source].storage[wait];
    }

    if (go) {
      console.log('NIS: ' + nis);
      console.log('TIMING: ' + timing);
      setTimeout(() => {
        const newInstruction = this.readInstruction(this.memory.stores[nis].storage[timing]);
        this.processInstruction(newInstruction);
      }, 500);
    }
  }

  displayWord(word) {
    const binaryString = this.createBinaryString(word).split('').reverse();
    const lightArray = this.clearOS();
    for (let i = 0; i < 32; i++) {
      if (binaryString[i] === '1') {
        lightArray[i].state = true;
        lightArray[i].imgPath = 'assets/img/DomeLight_onRed.png';
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

  // Creates binary string of decimal number.
  // Function adapted for TypeScript from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators
  createBinaryString (nMask) {
    // nMask must be between -2147483648 and 2147483647
    let sMask = '';
    for (let nFlag = 0, nShifted = nMask; nFlag < 32;) {
      nFlag++;
      sMask += String(nShifted >>> 31);
      nShifted <<= 1;
    }
    return sMask;
  }

  clearOS() {
    const osArray = this.OSLights.toArray();
    for (let i = 0; i < 32; i++) {
      osArray[i].state = false;
      osArray[i].imgPath = 'assets/img/DomeLight_offWhite.png';
    }
    return osArray;
  }

  switchClicked(event: any) {
    if (event === 'singleShot') {
      const instruction = this.readInstructionfromPanel();
      if (this.readfromID === 0) {
        this.processInstruction(instruction);
      } else {
        this.IDtotal = this.calculateFormat(instruction);
        if (this.lastDestination < 22) {
          this.memory.stores[this.lastDestination].storage[0] = this.IDtotal;
        } else if (this.lastDestination === 29) {
          this.displayWord(this.IDtotal);
        }
        this.readfromID = 0;
      }
      this.lastInstruction = instruction;
      console.log(this.memory.stores);
    } else if (event === 'clearOps') {
      this.clearOS();
    } else if (event === 'initialInput') {
      const instruction = this.readInstruction(this.memory.stores[1].storage[0]);
      this.processInstruction(instruction);
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
