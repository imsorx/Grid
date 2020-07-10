import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'toast',
    templateUrl: 'toast.component.html',
    styleUrls: ['toast.component.scss']
})

export class ToastComponent implements OnInit {
    @Input() toastType: string;
    @Input() toastContent: string;
    @Input() showToast: boolean;
    @Output() dismissed = new EventEmitter();

    dismissToast(): void {
      this.dismissed.next();
    }

    constructor() {
    }

    ngOnInit(): void {
    }
}
