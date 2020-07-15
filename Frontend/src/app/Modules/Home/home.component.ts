import { Component, OnInit } from '@angular/core';
import * as Feather from 'feather-icons';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'home',
  template: '<sidebar></sidebar><list></list><div class="chat-wrapper"><router-outlet></router-outlet></div><profile *ngIf="showProfile"></profile>',
  styles: [`
    :host {
        display: grid;
        grid-template-columns: minmax(220px, 220px) minmax(200px, 250px) 1fr 1fr;
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
        position:relative;
        z-index:10;
      }
      .chat-wrapper::after{
        content:'';
        position:absolute;
        top:80%;
        left:50%;
        height:60%;
        width: 60%;
        transform:translate(-50%,-50%);
        background:url('assets/chat_bg.svg') no-repeat;
        background-size:contain;
        opacity:0.15;
        z-index:-1;
      }
      `],
})


export class HomeComponent implements OnInit {
  showProfile: boolean = false;

  constructor(private global: GlobalService) { }
  
  ngOnInit() {
    Feather.replace();
    this.global.showProfile$.subscribe(value => this.showProfile = value);
  }
  ngOnDestroy(){
    this.global.showProfile$.unsubscribe();
}
}