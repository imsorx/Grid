import { httpService } from './../../../services/http.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  error:string = null;

  constructor(private router: Router, private http: httpService) { }

  auth(signupform: NgForm) {
    if (!signupform.valid){
      return this.error = "Enter valid Credentials!"
    }
    this.http.signup(signupform.value).subscribe((resData) => {
      signupform.resetForm;
      this.router.navigateByUrl('/home');
    },errorMsg =>{
      this.error = errorMsg;
    });
  }

  ngOnInit() {
  }

}