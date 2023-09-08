import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from "../../core/core.module";


@NgModule({
    declarations: [
        LoginPageComponent,
        RegisterPageComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        SharedModule,
        CoreModule
    ]
})
export class AuthModule { }
