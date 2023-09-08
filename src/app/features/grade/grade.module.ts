import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GradeCreateComponent } from './components/grade-create/grade-create.component';
import { GradeEditComponent } from './components/grade-edit/grade-edit.component';
import { GradeListComponent } from './components/grade-list/grade-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { GradeShowComponent } from './components/grade-show/grade-show.component';
import { createGradeForm } from './grade-form';
import { FormBuilder } from '@angular/forms';



@NgModule({
  declarations: [
    GradeCreateComponent,
    GradeEditComponent,
    GradeListComponent,
    GradeShowComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GradeCreateComponent,
    GradeEditComponent,
    GradeListComponent,
    GradeShowComponent
  ],
  providers: [
    {
      provide: 'GradeForm',
      useFactory: createGradeForm,
      deps: [FormBuilder],
    },
  ],
})
export class GradeModule { }
