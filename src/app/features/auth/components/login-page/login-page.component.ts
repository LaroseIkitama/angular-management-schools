import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AuthenticationData } from 'src/app/core/auth/authentication-data';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { SessionService } from 'src/app/core/session/session.service';
import { TokenService } from 'src/app/core/token/token.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  form!: FormGroup;
  user!: User;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private sessionService: SessionService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }


  get email() {
    return this.form.get('email')
  }

  get password() {
    return this.form.get('password');
  }

  isInvalid(control: any): boolean {
    return control?.invalid && (control?.dirty || control?.touched);
  }

  isRequiredError(control: any): boolean {
    return control?.errors?.required;
  }

  onSubmit() {
    if (this.form.valid) {

      const authenticationData: AuthenticationData = {
        email: this.form.value.email,
        password: this.form.value.password
      };

      this.authenticateAndFetchUser(authenticationData);

    } else {
      this.form.markAllAsTouched();
    }

  }

  private authenticateAndFetchUser(authenticationData: AuthenticationData) {
    this.authService.authenticate(authenticationData).pipe(
      tap((response) => {
        this.tokenService.setToken(response.token);
        this.fetchUser(authenticationData.email);
      })
    ).subscribe();
  }

  private fetchUser(email: string) {
    this.userService.getUserByEmail(email).pipe(
      tap(
        user => {
          this.user = user;
          this.sessionService.createSession(this.user.id, this.user.name, this.user.role);
          this.router.navigate(['/navigation/home']);
        }
      )
    ).subscribe();
  }


}