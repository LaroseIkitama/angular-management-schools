import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { StudentCreateComponent } from './components/student-create/student-create.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentEditComponent } from './components/student-edit/student-edit.component';
import { StudentShowComponent } from './components/student-show/student-show.component';
import { StudentGradesListComponent } from './components/student-grades-list/student-grades-list.component';
import { ReportCardComponent } from './components/report-card/report-card.component';
import { createStudentForm } from './student-form';
import { FormBuilder } from '@angular/forms';



@NgModule({
  declarations: [
    StudentCreateComponent,
    StudentListComponent,
    StudentEditComponent,
    StudentShowComponent,
    StudentGradesListComponent,
    ReportCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    StudentCreateComponent,
    StudentListComponent,
    StudentEditComponent,
    StudentShowComponent,
    StudentGradesListComponent,
    ReportCardComponent

  ],
  providers: [
    {
      provide: 'StudentForm',
      useFactory: createStudentForm,
      deps: [FormBuilder],
    },
  ],
})
export class StudentModule { }
