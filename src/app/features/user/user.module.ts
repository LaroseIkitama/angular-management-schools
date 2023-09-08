import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserParametersComponent } from './components/user-parameters/user-parameters.component';
import { UserChangePasswordComponent } from './components/user-change-password/user-change-password.component';
import { createUserForm } from './user-form';
import { FormBuilder } from '@angular/forms';



@NgModule({
  declarations: [
    UserListComponent,
    UserEditComponent,
    UserCreateComponent,
    UserParametersComponent,
    UserChangePasswordComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    UserListComponent,
    UserEditComponent,
    UserCreateComponent,
    UserParametersComponent,
    UserChangePasswordComponent
  ],
  providers: [
    {
      provide: 'UserForm',
      useFactory: createUserForm,
      deps: [FormBuilder],
    },
  ],
})
export class UserModule { }
