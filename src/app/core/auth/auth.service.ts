import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, throwError } from 'rxjs';
import { AuthenticationData } from './authentication-data';
import { TokenService } from '../token/token.service';
import { SessionService } from '../session/session.service';
import { Router } from '@angular/router';



const apiUrl = 'http://localhost:8080/management_of_schools/auth';

/* const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json' // Ajoutez l'en-tête Content-Type
  })
}; */

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private sessionService: SessionService,
    private tokenService: TokenService,
    private router: Router
  ) { }

  register(registerRequest: any): Observable<any> {
    return this.http.post(`${apiUrl}/register`, registerRequest).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while registering.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }


  authenticate(authenticationRequest: AuthenticationData): Observable<any> {
    return this.http.post(`${apiUrl}/authenticate`, authenticationRequest).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while authenticating.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  autoLogout(expirationDate: number) {
    setTimeout(() => {
      this.logout();
    }, expirationDate);

  }
  logout() {
    this.sessionService.clearSession();
    this.tokenService.removeToken();
    this.router.navigate(['/auth/login']);
  }


}
