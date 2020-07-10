import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable()
export class AuthHeadersInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('user')) {
            let token = JSON.parse(localStorage.getItem('user')).token;
            let _request = request.clone({ setHeaders: { Authorization: `Bearer ${token}` } });
            return next.handle(_request);
        }
        return next.handle(request);
    }
}