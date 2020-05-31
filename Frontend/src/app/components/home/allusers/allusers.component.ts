import { Component, OnInit } from '@angular/core';
import { flyin } from '../../../Animation/animations';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-allusers',
  templateUrl: './allusers.component.html',
  styleUrls: ['./allusers.component.scss'],
  animations: [flyin],
})
export class AllusersComponent implements OnInit {
  users: object;
  searchfield: string;

  constructor(private dataService: DataService) {
  }
  ngOnInit() {
    this.users = this.dataService.getuserlist();
  }
}
