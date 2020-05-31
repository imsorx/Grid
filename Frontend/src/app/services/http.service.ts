import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { join } from 'path';
@Injectable({
  providedIn: 'root',
})
export class httpService {
  // Declaring urls
  private base: string;
  private loginURL: string;
  private signupURL: string;
  private getUsersURL: string;
  private token: string;

  constructor(private http: HttpClient) {
    this.base = 'http://localhost:4040/';
    this.loginURL = `${this.base}login`;
    this.signupURL = `${this.base}signup`;
    this.getUsersURL = `${this.base}users`;
    this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlY2E2ZmE0MzQxYWVjMjg4Y2EwYjBkOSIsIm1haWwiOiJzcmJoa3BAZ21haWwuY29tIiwiaWF0IjoxNTkwOTUyMTM0fQ.KHv9w-UqKg2KKr1OP-58BlW67rJSVevBdsnbizDyW_Y';
  }

  //   public http methods
  public get(url: string, options: object): Observable<object> {
    return this.http.get(url, options);
  }
  public post(url: string, data: object): Observable<object> {
    return this.http.post(url, data);
  }

  //   application specific requests
  getUsers(): Observable<object> {
    return this.http.get(this.getUsersURL, {
      headers: {
        Authorization: `Bearer ${this.token}`
      }
    });
  }
  signin(user: { username: any; password: any }): Observable<object> {
    return this.post(this.loginURL, {
      mail: user.username,
      pwd: user.password,
    }).pipe(catchError(this.errorHandler));
  }

  signup(user: { name: any; mail: any; password: any }): Observable<object> {
    return this.post(this.signupURL, {
      name: user.name,
      mail: user.mail,
      pwd: user.password,
    }).pipe(catchError(this.errorHandler));
  }

  //   Error handler
  private errorHandler(errorRes: HttpErrorResponse) {
    console.log(errorRes);
    let errorMsg = 'Can\'t Connect to server!';
    if (!errorRes.error.error) {
      return throwError(errorMsg);
    }
    errorMsg = errorRes.error.error._message;
    return throwError(errorMsg);
  }
}
