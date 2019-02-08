import { Register } from './Register';
import { TemporaryStore } from './TemporaryStore';
import { DelayLine } from './DelayLine';
import { DoubleStore } from './DoubleStore';
import { QuadStore } from './QuadStore';

export class Memory {
    stores: Array<Register>;

    constructor() {
        // this.stores = [new Register(1)];

        this.stores =  [null,
                        new DelayLine(),        // DL1
                        new DelayLine(),        // DL2
                        new DelayLine(),        // DL3
                        new DelayLine(),        // DL4
                        new DelayLine(),        // DL5
                        new DelayLine(),        // DL6
                        new DelayLine(),        // DL7
                        new DelayLine(),        // DL8
                        new DelayLine(),        // DL9
                        new DelayLine(),        // DL10
                        new DelayLine(),        // DL11
                        new DelayLine(),        // DL12
                        new TemporaryStore(),   // TS13
                        new TemporaryStore(),   // TS14
                        new TemporaryStore(),   // TS15
                        new TemporaryStore(),   // TS16
                        new QuadStore(),        // QS17
                        new QuadStore(),        // QS18
                        new DoubleStore(),      // DS19
                        new DoubleStore(),      // DS20
                        new DoubleStore()       // DS21
                    ];
    }

    getStores() {
        return this.stores;
    }

}
