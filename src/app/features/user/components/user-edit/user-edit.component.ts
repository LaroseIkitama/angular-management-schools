import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Role, User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { SessionService } from 'src/app/core/session/session.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss', '../../../../shared/styles/common-styles.scss']
})
export class UserEditComponent implements OnInit {
  @Input()
  USER_ID!: number;

  user!: User;

  form!: FormGroup;

  userRole = Role;

  loggedInUserRole: string | undefined;

  constructor(
    private router: Router,
    private userService: UserService,
    private sessionService:SessionService,
    @Inject('UserForm') private sharedForm: FormGroup // Inject the shared form

  ) {
    this.form = this.sharedForm;
  }

  ngOnInit(): void {

    this.loadUSer(this.USER_ID);
    const session = this.sessionService.getSession();

    if (session) {
      this.loggedInUserRole = session.role;
    }

  }

  private loadUSer(userId: number) {
    this.userService.getUser(userId)
      .subscribe(user => {
        this.user = user;
        this.loadForm(this.user);
      });
  }

  private loadForm(user: User) {
    this.form.setValue({
      id:user.id,
      name: user.name,
      password: user.password,
      email: user.email,
      role: user.role
    });
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
      this.userService.updateUser(this.form.value).pipe(
        tap(() => {
          this.router.navigate(['/navigation/users/list']);
        })
      ).subscribe();
    } else {
      this.form.markAllAsTouched();
    }
  }
  goBack() {
    this.router.navigate(['/navigation/users/list']);
  }
}
