import { interval, timer } from "rxjs";

export class Mole {
    id: number;
    active: boolean;
   
    constructor(id: number) {
        this.id = id;
        this.active = true;
        this.setMoleClock();    
    }

    setMoleClock() {
        interval(((Math.random() * 3) + 1) * 1000)
        .subscribe( () => this.deactivate());
    }

    deactivate() {
        this.active = !this.active;
    }
}