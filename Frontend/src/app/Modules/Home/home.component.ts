import { Component } from '@angular/core';

@Component({
    selector: 'home',
    template: '<sidebar></sidebar><list></list><chat></chat>',
    styles: [`
    :host {
        display: grid;
        grid-template-columns: minmax(200px, 250px) minmax(200px, 300px) 1fr 1fr;
        justify-items: stretch;
        height: 100%;
        width:100%;
    }
    sidebar {
        grid-column: 1/2;
      }
      
      list {
        grid-column: 2/3;
      }
      
      chat {
        grid-column: 3/5;
        min-height: 0;
      }
    `]
})


export class HomeComponent {
    constructor() { }
}