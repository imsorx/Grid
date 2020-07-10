import { Component, Input } from '@angular/core';

@Component({
    selector: 'alert-toast',
    template: `<div class="error">{{data}}
                <span class="close" (click)="isFail = !isFail">x</span>
               </div>`,
    styles: [
        `.error {
            position: absolute;
            display: flex;
            align-items: flex-start;
            bottom: 0;
            left: 50%;
            width: 80%;
            color: #eee;
            padding: 4px 4px 4px 8px;
            border-radius: 12px;
            background-color: hsl(7, 90%, 45%);
            animation: push .2s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards;
            z-index: 5;
            .close{
              margin-left: auto;
              color: hsl(348, 100%, 50%);
              font-weight: 700;
              padding: 0 4px;
              background: #eee;
              border-radius: 50%;
              cursor: pointer;
            }
          }
          
          @keyframes push {
            from{
              opacity: 0;
              transform: translate(-50%,40%);
            }
            to {
              opacity: 1;
              transform: translate(-50%,-50%);
            }
        }`
    ]
})

export class AlertComopnent {

    type: string;
    data: string = 'Error: Server not available';

    constructor() { }
}