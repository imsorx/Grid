import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';

@Component({
  selector: 'home',
  template: '<sidebar></sidebar><list></list><chat></chat>',
  styles: [`
    :host {
        display: grid;
        grid-template-columns: minmax(200px, 250px) minmax(200px, 300px) 1fr 1fr;
        justify-items: stretch;
        height: calc(100% - 30px);
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


export class HomeComponent implements OnInit {
  constructor() { }
  ngOnInit(){
    Feather.replace();
  }
}