import { Component, Input } from '@angular/core';

@Component({
    selector: 'alert',
    template: `<div class="wrapper">
    <p class="msg">
    {{data}}
    <i data-feather="x" class="icon"></i>
    </p>
    </div>`,
    styles: [
        `.wrapper{
            display:inline-block;
            align-items:center;
            border-radius:16px;
            background:red;
            padding:4px 8px;
        }`,
        `.icon{
            display: inline-block;
            height: 14px;
            margin: auto 0;
        }`
    ]
})

export class AlertComopnent {

    @Input() type:string;
    @Input() data:string = 'Error: Server not available';

    constructor() { }
}