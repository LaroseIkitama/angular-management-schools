import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Role } from 'src/app/core/models/user';
import { SessionService } from 'src/app/core/session/session.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss', '../../../../shared/styles/common-styles.scss']
})
export class UserCreateComponent implements OnInit {

  form!: FormGroup;
  userRole = Role;

  loggedInUserRole: string | undefined;

  constructor(
    private router: Router,
    private authService: AuthService,
    private sessionService:SessionService,
    @Inject('UserForm') private sharedForm: FormGroup
  ) {
    this.form = this.sharedForm;
  }

  ngOnInit(): void {
    const session = this.sessionService.getSession();

    if (session) {
      this.loggedInUserRole = session.role;
    }
  }

  get name() {
    return this.form.get('name');
  }

  get password() {
    return this.form.get('password');
  }

  get email() {
    return this.form.get('email');
  }

  get role() {
    return this.form.get('role');
  }

  isInvalid(control: any): boolean {
    return control?.invalid && (control?.dirty || control?.touched);
  }

  isRequiredError(control: any): boolean {
    return control?.hasError('required');
  }

  isPatternError(control: any): boolean {
    return control?.hasError('pattern') || control?.hasError('email');
  }

  onSubmit() {
    if (this.form.valid) {
      this.authService.register(this.form.value).pipe(
        tap(() => {
          this.router.navigateByUrl('/navigation/users/list');
        })
      ).subscribe();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
