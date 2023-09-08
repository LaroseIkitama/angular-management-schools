import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { TokenService } from '../token/token.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) { }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentUrl = this.router.url;

    const isLoginPageOrRegister =
      currentUrl.includes('/auth/login') || currentUrl.includes('/auth/register');

    if (isLoginPageOrRegister) {
      // Ne pas ajouter l'en-tête "Authorization"
      return next.handle(request);
    }

    // Ajouter l'en-tête "Authorization" avec le token
    const token = this.tokenService.getToken();

    const authorizedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(authorizedRequest);
  }
}
