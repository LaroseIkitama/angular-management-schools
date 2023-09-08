import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectCreateComponent } from './components/subject-create/subject-create.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectEditComponent } from './components/subject-edit/subject-edit.component';
import { SubjectAddToClassroomComponent } from './components/subject-add-to-classroom/subject-add-to-classroom.component';
import { createSubjectForm } from './subject-form';
import { FormBuilder } from '@angular/forms';


@NgModule({
  declarations: [
    SubjectCreateComponent,
    SubjectListComponent,
    SubjectEditComponent,
    SubjectAddToClassroomComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    SubjectCreateComponent,
    SubjectListComponent,
    SubjectEditComponent,
    SubjectAddToClassroomComponent,
  ],
  providers: [
    {
      provide: 'SubjectForm',
      useFactory: createSubjectForm,
      deps: [FormBuilder],
    },
  ],
})
export class SubjectModule { }
