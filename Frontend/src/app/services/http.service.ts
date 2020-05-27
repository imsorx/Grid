import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { join } from "path";
@Injectable({
  providedIn: "root",
})
export class httpService {
  // Declaring urls
  private baseURL: string;
  private loginURL: string;
  private signupURL: string;
  private getUsersURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = "http://localhost:4040/";
    this.loginURL = join(this.baseURL, "login");
    this.signupURL = join(this.baseURL, "signup");
    this.getUsersURL = join(this.baseURL, "user");
  }

  //   public http methods
  public get(url: string, data: object): Observable<object> {
    return this.http.get(url, data);
  }
  public post(url: string, data: object): Observable<object> {
    return this.http.post(url, data);
  }

  //   application specific requests
  getUsers(): Observable<object> {
    return this.http.get(this.getUsersURL);
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
    let errorMsg = "Can't Connect to server!";
    if (!errorRes.error.error) {
      return throwError(errorMsg);
    }
    errorMsg = errorRes.error.error._message;
    return throwError(errorMsg);
  }
}
