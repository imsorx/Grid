import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()

export class GlobalService {

    public showSettings: Subject<boolean>;
    public darkMode$: Subject<boolean>;
    public notification$: Subject<object>;

    constructor() {
        this.darkMode$ = new Subject();
        this.showSettings = new Subject();
        this.notification$ = new Subject();
    }

    public toggleSettings(value: boolean): void {
        this.showSettings.next(value);
    }

    public newToast(type: string, data: string) {
        this.notification$.next({ type, data });
    }

}