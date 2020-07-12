import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()

export class GlobalService {

    public showSettings: Subject<boolean>;
    public darkMode$: Subject<boolean>;
    
    constructor() {
        this.darkMode$ = new Subject();
        this.showSettings = new Subject();
    }

    public toggleSettings(value: boolean): void {
        this.showSettings.next(value);
    }

}