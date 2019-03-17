import {
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpEvent,
  } from '@angular/common/http';
  import {Observable} from 'rxjs';
  import {Injectable} from '@angular/core';
  import { TokenService } from '../services/token.service';
  
  @Injectable()
  export class TokenInterceptor implements HttpInterceptor {
    constructor(public tokenService: TokenService) {}

    private token= "hello";
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      let tokenHeader;
      tokenHeader = req.clone({
        setHeaders: {
            Authorization: `Bearer ${this.tokenService.getToken()}`
        }
      });
      return next.handle(tokenHeader);
    }
}
