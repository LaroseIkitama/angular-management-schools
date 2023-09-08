import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { UserService } from 'src/app/core/services/user.service';
import { SessionService } from 'src/app/core/session/session.service';

@Component({
  selector: 'app-user-change-password',
  templateUrl: './user-change-password.component.html',
  styleUrls: ['./user-change-password.component.scss','../../../../shared/styles/common-styles.scss']
})
export class UserChangePasswordComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, this.confirmPasswordValidator()]]
    });
  }

  confirmPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const newPassword = this.form?.get('newPassword');
      const confirmPassword = this.form?.get('confirmPassword');

      if (newPassword?.value !== confirmPassword?.value) {
        return { confirmPasswordMismatch: true };
      } else {
        return null;
      }
    };
  }

  get newPassword() {
    return this.form.get('newPassword');
  }
  get confirmPassword() {
    return this.form.get('confirmPassword');
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

  isConfirmPasswordMismatchError(control: any): boolean {
    return control?.hasError('confirmPasswordMismatch');
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value.confirmPassword);
      const sessionData = this.sessionService.getSession();

      if (sessionData) {
        this.userService.changePassword(sessionData.userId, this.form.value.confirmPassword).pipe(
          tap(() => {
            this.router.navigateByUrl('/navigation/users/list');
          })
        ).subscribe();
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

}
