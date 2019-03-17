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

  // Sets up memory and flags for checking instructions.
  constructor() {
    this.memory = new Memory();
    this.readfromID = 0;
    this.lastInstruction = null;
    this.lastDestination = 0;
    this.IDtotal = 0;
  }

  ngOnInit() {
    this.dlIndex = 0;

    // Sets timer for counting minor cycles.
    setInterval(() => {
      this.dlIndex = (this.dlIndex + 1) % 32;
    }, 500);

    // Sets up pre-loaded program in card reader.
    // When Initial Input is clicked, Output Staticiser lights will light up from left to right.
    this.memory.stores[1].storage[0] = 2181045682;
    this.memory.stores[1].storage[1] = 2214607586;
    this.memory.stores[1].storage[2] = 2248154498;
    this.memory.stores[1].storage[3] = 2281716450;
    this.memory.stores[1].storage[4] = 2315263362;
    this.memory.stores[1].storage[5] = 2348825314;
    //this.memory.stores[1].storage[6] =

  }

  // Reads input from Input Dynamiciser and returns 32-bit instruction
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

  // Converts number held in memory to binary array
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

  // Breaks down instruction to individual parts and processes instruction.
  processInstruction(instruction) {
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

    // Checks Source value of instruction for special cases.
    // Source 0 - read value from Input Dynamiciser
    if (source === 0) {
      this.readfromID = 1;
      this.lastDestination = destination;
      return;

    // Source 23 - Divide contents of TS14 by 2 and place in Destination address.
    } else if (source === 23) {
      this.memory.stores[destination].storage[0] = this.memory.stores[14].storage[0] / 2;

    // Source 24 - Multiply contents of TS14 by 2 and place in Destination address.
    } else if (source === 24) {
      this.memory.stores[destination].storage[0] = this.memory.stores[14].storage[0] * 2;

    // Source 27 - Place 1 in Destination address.
    } else if (source === 27) {
      this.memory.stores[destination].storage[0] = 1;

    // Source 28 - Place 2^16 in Destination address.
    } else if (source === 28) {
      this.memory.stores[destination].storage[0] = 2 ** 16;

    // Source 29 - Place 2^31 in Destination address.
    } else if (source === 29) {
      this.memory.stores[destination].storage[0] = 2 ** 31;

    // Source 30 - Place 0 in Destination address.
    } else if (source === 30) {
      this.memory.stores[destination].storage[0] = 0;

    // Source 31 - Place -1 in Destination address.
    } else if (source === 31) {
      this.memory.stores[destination].storage[0] = -1;
    }

    // Checks Destination value of instruction for special cases
    // Destination 25 - Adds contents of Source address to TS13.
    if (destination === 25) {
        this.memory.stores[13].storage[0] += this.memory.stores[source].storage[wait];

    // Destination 26 - Subtracts contents of Source address from TS13.
    } else if (destination === 26) {
        this.memory.stores[13].storage[0] -= this.memory.stores[source].storage[wait];

    // Destination 27 - Checks if contents of Source address is negative or positive.
    // Goes to one of two adjacent memory addresses in memory depending on outcome.
    } else if (destination === 27) {
        if (this.memory.stores[source].storage[0] < 0) {
          timing += 1;
        }

    // Destination 28 - Checks if contents of Source address is zero or non-zero.
    // Goes to one of two adjacent memory addresses in memory depending on outcome.
    } else if (destination === 28) {
      if (this.memory.stores[source].storage[0] !== 0) {
        timing += 1;
      }

    // Destination 29 - Displays output to Output Staticiser lights.
    } else if (destination === 29) {
      const word = this.memory.stores[source].storage[0];
      this.displayWord(word);
    }

    // Checks if source and destination are valid memory locations and performs transfer.
    if (source <= 22 && destination <= 22) {
      this.memory.stores[destination].storage[wait] = this.memory.stores[source].storage[wait];
    }

    // If Go bit is 1, this proceeds to execute next instruction immediately.
    if (go) {
      setTimeout(() => {
        const newInstruction = this.readInstruction(this.memory.stores[nis].storage[timing]);
        this.processInstruction(newInstruction);
      }, 500);
    }
  }

  // Displays a word on Output Staticiser lights.
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

  // Calculates the decimal value of an instruction.
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

  // Clears the Output Staticiser lights to 0.
  clearOS() {
    const osArray = this.OSLights.toArray();
    for (let i = 0; i < 32; i++) {
      osArray[i].state = false;
      osArray[i].imgPath = 'assets/img/DomeLight_offWhite.png';
    }
    return osArray;
  }

  // Event that listens for when a switch was clicked.
  switchClicked(event: any) {
    // When Single Shot switch clicked, word from Input Dynamiciser is read in.
    // Function checks if data being read in is instruction or data value.
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

    // Checks if Clear Ops switch was clicked.
    } else if (event === 'clearOps') {
      this.clearOS();

    // Checks if Initial Input switch was clicked. If it was,
    // pre-loaded program is executed.
    } else if (event === 'initialInput') {
      const instruction = this.readInstruction(this.memory.stores[1].storage[0]);
      this.processInstruction(instruction);

    // Otherwise, switch corresponds to a light, so corresponding light is turned on.
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
