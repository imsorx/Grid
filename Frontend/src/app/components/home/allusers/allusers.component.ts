import { Component, OnInit } from "@angular/core";
import { flyin } from "../../../Animation/animations";

@Component({
  selector: "app-allusers",
  templateUrl: "./allusers.component.html",
  styleUrls: ["./allusers.component.scss"],
  animations: [flyin],
})
export class AllusersComponent implements OnInit {
  users: object;
  searchfield: string;

  constructor() {
  }

  ngOnInit() {}
}
