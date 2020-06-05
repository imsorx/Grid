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
            lstMsg:'By the order of Peaky Blinders! hahahaha'
        },
        {
            name:'Heisenberg',
            lstMsg:'I have done some bad things'
        },
        {
            name:'John Snow',
            lstMsg:'The Winter is Coming!'
        }
    ]
    constructor() { }

    ngOnInit() { }
}