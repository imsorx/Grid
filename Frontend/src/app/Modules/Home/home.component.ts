import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'home',
  template: '<sidebar></sidebar><list></list><div class="chat-wrapper"><router-outlet></router-outlet></div>',
  styles: [`
    :host {
        display: grid;
        grid-template-columns: minmax(200px, 200px) minmax(200px, 250px) 1fr 1fr;
        justify-items: stretch;
        height: calc(100% - 30px);
        width:100%;
    }
    sidebar {
        grid-column: 1/2;
      }
      
      list {
        grid-column: 2/3;
        min-height: 0;
      }
      
      .chat-wrapper {
        grid-column: 3/5;
        height:100%;
        min-height: 0;
      }
    `]
})


export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    Feather.replace();
  }
}