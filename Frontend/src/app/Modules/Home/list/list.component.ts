import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})

export class ListComponent implements OnInit {
    users = [
        {
            name:'Thomas Shelby',
            lstMsg:'By the order of Peaky Blinders!',
            img:'assets/thomas.jpg'
        },
        {
            name:'Heisenberg',
            lstMsg:'Say my NAME!',
            img:'assets/heisenberg.jpg'
        },
        {
            name:'John Snow',
            lstMsg:'The Winter is Coming!',
            img:'assets/jon.jpg'
        }
    ]
    constructor() { }

    ngOnInit() { }
}