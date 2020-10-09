import { Injectable } from '@angular/core'


@Injectable()

export class CallService {

    isActive: boolean = false

    constructor() { }

    newCall() {
        this.isActive = true
    }
    endCall() {
        this.isActive = false;
    }

    public get callStatus(): boolean {
        return this.isActive;
    }

}