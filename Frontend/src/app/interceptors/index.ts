import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHeadersInterceptor } from './authHeader';
import { ImgParserInterceptor } from './imgParser'

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthHeadersInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ImgParserInterceptor, multi: true }
]