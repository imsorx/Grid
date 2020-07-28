import { Component, OnInit, Input } from '@angular/core'


@Component({
    selector: 'user',
    templateUrl: 'user.component.html',
    styleUrls: ['user.component.scss']
})

export class UserComponent implements OnInit {
    @Input() name: string;
    @Input() msg: string;
    @Input() img: string;
    constructor() {
    }
    ngOnInit() {

    }
}
