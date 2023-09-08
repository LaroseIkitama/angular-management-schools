import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from 'src/app/shared/shared.module';
import { ClassroomCreateComponent } from './components/classroom-create/classroom-create.component';
import { ClassroomEditComponent } from './components/classroom-edit/classroom-edit.component';
import { ClassroomListComponent } from './components/classroom-list/classroom-list.component';
import { ClassroomSubjectsListComponent } from './components/classroom-subjects-list/classroom-subjects-list.component';
import { ClassroomStudentsListComponent } from './components/classroom-students-list/classroom-students-list.component';
import { createClassroomForm } from './classroom-form';
import { FormBuilder } from '@angular/forms';

@NgModule({
  declarations: [
    ClassroomCreateComponent,
    ClassroomEditComponent,
    ClassroomListComponent,
    ClassroomSubjectsListComponent,
    ClassroomStudentsListComponent, 
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    ClassroomCreateComponent,
    ClassroomEditComponent,
    ClassroomListComponent,
    ClassroomSubjectsListComponent,
    ClassroomStudentsListComponent,

    
  ],
  providers: [
    {
      provide: 'ClassroomForm',
      useFactory: createClassroomForm,
      deps: [FormBuilder],
    },
  ],
})
export class ClassroomModule { }
