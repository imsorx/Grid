import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { AppConfig } from './../../environments/environment.dev'

@Injectable()
export class ImgParserInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(map((response: HttpEvent<any>) => {
                if (response instanceof HttpResponse) {
                    if (response.body instanceof Array) {
                        let newBody = response.body.map((u) => {
                            u.img = `${AppConfig.API}${u.img}`;
                            return u;
                        });
                        let _response = response.clone({ body: newBody });
                        return _response;
                    }
                    if (request.url.includes('/users/')) {
                        let newBody = {...response.body};
                        newBody.img = `${AppConfig.API}${response.body.img}`;
                        let _response = response.clone({ body: newBody });
                        return _response
                    }
                    if (request.url.includes('/login')) {
                        let newBody = {...response.body};
                        newBody.img = `${AppConfig.API}${response.body.img}`;
                        let _response = response.clone({ body: newBody });
                        return _response
                    }
                }
                return response;
            }));
    }
}