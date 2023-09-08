import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from './shared/shared.module';
import { DashboardModule } from './features/dashboard/dashboard.module';

import { ClassroomModule } from './features/classroom/classroom.module';
import { StudentModule } from './features/student/student.module';
import { NavigationModule } from './features/navigation/navigation.module';
import { SubjectModule } from './features/subject/subject.module';
import { AuthInterceptor } from './core/auth/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot(), // ToastrModule added,

    HttpClientModule,

    CoreModule,
    SharedModule,

    DashboardModule,

    ClassroomModule,
    StudentModule,
    SubjectModule,
    NavigationModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

