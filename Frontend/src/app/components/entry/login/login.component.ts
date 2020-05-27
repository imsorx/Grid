import { NgForm } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { httpService } from "../../../services/http.service";
import { ElectronService } from "ngx-electron";

interface response {
  message: String,
  token: String
}
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  error: string = null;

  constructor(private router: Router, private http: httpService, private electron: ElectronService) { }

  auth(loginform: NgForm) {
    if (!loginform.valid) {
      return (this.error = "Enter valid Credentials!");
    }
    return (
      this.http.signin(loginform.value).subscribe((resData: response) => {
        loginform.resetForm;
        console.log(resData);
        this.electron.remote.getGlobal('session').user_id = resData;
        console.log(this.electron.remote.getGlobal('session').token);
        this.router.navigateByUrl("/home");
      }),
      (errorMsg: string) => {
        this.error = errorMsg;
      }
    );
  }

  ngOnInit() { }
}