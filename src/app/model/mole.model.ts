import { Subscription, timer } from "rxjs";

export class Mole {
    id: number;
    active: boolean;
   
    constructor(id: number) {
        this.id = id;
        this.active = true;
        timer(Math.floor(Math.random() * 3))
        .subscribe(() => this.active = false);
    }
}