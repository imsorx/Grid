import { Component, OnInit } from '@angular/core';
import { routeAnimations } from '../../Animation/animations';
import { RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss'],
  animations: [routeAnimations]
})
export class EntryComponent implements OnInit {
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
  constructor() { }
  ngOnInit() {
  }
}
