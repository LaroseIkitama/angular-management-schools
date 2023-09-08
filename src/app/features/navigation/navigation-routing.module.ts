import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeViewPageComponent } from './components/home-view-page/home-view-page.component';
import { ClassroomCreateViewPageComponent } from './components/classroom/classroom-create-view-page/classroom-create-view-page.component';
import { ClassroomListViewPageComponent } from './components/classroom/classroom-list-view-page/classroom-list-view-page.component';
import { ClassroomEditViewPageComponent } from './components/classroom/classroom-edit-view-page/classroom-edit-view-page.component';
import { StudentCreateViewPageComponent } from './components/student/student-create-view-page/student-create-view-page.component';
import { StudentListViewPageComponent } from './components/student/student-list-view-page/student-list-view-page.component';
import { StudentEditViewPageComponent } from './components/student/student-edit-view-page/student-edit-view-page.component';
import { StudentShowViewPageComponent } from './components/student/student-show-view-page/student-show-view-page.component';
import { SubjectCreateViewPageComponent } from './components/subject/subject-create-view-page/subject-create-view-page.component';
import { SubjectListViewPageComponent } from './components/subject/subject-list-view-page/subject-list-view-page.component';
import { SubjectEditViewPageComponent } from './components/subject/subject-edit-view-page/subject-edit-view-page.component';
import { SubjectAddToClassroomViewPageComponent } from './components/subject/subject-add-to-classroom-view-page/subject-add-to-classroom-view-page.component';
import { ClassroomSubjectsListViewPageComponent } from './components/classroom/classroom-subjects-list-view-page/classroom-subjects-list-view-page.component';
import { ClassroomStudentsListViewPageComponent } from './components/classroom/classroom-students-list-view-page/classroom-students-list-view-page.component';
import { GradeCreateViewPageComponent } from './components/grade/grade-create-view-page/grade-create-view-page.component';
import { GradeListViewPageComponent } from './components/grade/grade-list-view-page/grade-list-view-page.component';
import { GradeEditViewPageComponent } from './components/grade/grade-edit-view-page/grade-edit-view-page.component';
import { GradeShowViewPageComponent } from './components/grade/grade-show-view-page/grade-show-view-page.component';
import { UserCreateViewPageComponent } from './components/user/components/user-create-view-page/user-create-view-page.component';
import { UserListViewPageComponent } from './components/user/components/user-list-view-page/user-list-view-page.component';
import { UserEditViewPageComponent } from './components/user/components/user-edit-view-page/user-edit-view-page.component';
import { UserParametersViewPageComponent } from './components/user/components/user-parameters-view-page/user-parameters-view-page.component';
import { UserChangePasswordViewPageComponent } from './components/user/components/user-change-password-view-page/user-change-password-view-page.component';
import { adminGuard } from 'src/app/core/guard/admin.guard';


import { StudentGradesListViewPageComponent } from './components/student/student-grades-list-view-page/student-grades-list-view-page.component';
import { ReportCardViewPageComponent } from './components/student/report-card-view-page/report-card-view-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeViewPageComponent },

  {
    path: 'classrooms',
    children:
      [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'create', component: ClassroomCreateViewPageComponent },
        { path: 'list', component: ClassroomListViewPageComponent },
        { path: 'edit/:ID', component: ClassroomEditViewPageComponent },
        { path: ':classroomId/subjects', component: ClassroomSubjectsListViewPageComponent },
        { path: ':classroomId/students', component: ClassroomStudentsListViewPageComponent }
      ]

  },

  {
    path: 'students',
    children:
      [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'create', component: StudentCreateViewPageComponent },
        { path: 'list', component: StudentListViewPageComponent },
        { path: 'edit/:ID', component: StudentEditViewPageComponent },
        { path: 'show/:ID', component: StudentShowViewPageComponent },
        { path: ':studentId/grades', component: StudentGradesListViewPageComponent },
        { path: ':studentId/report-card', component: ReportCardViewPageComponent },
      ]
  },

  {
    path: 'subjects',
    children:
      [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'create', component: SubjectCreateViewPageComponent },
        { path: 'list', component: SubjectListViewPageComponent },
        { path: 'edit/:ID', component: SubjectEditViewPageComponent },
        { path: 'add-to-classroom', component: SubjectAddToClassroomViewPageComponent }
      ]
  },

  {
    path: 'grades',
    children:
      [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        {
          path: 'create', component: GradeCreateViewPageComponent
        },
        { path: 'list', component: GradeListViewPageComponent },
        { path: 'edit/:ID', component: GradeEditViewPageComponent },
        { path: 'show/:ID', component: GradeShowViewPageComponent }
      ]
  },
  {
    path: 'users',
    children:
      [
        { path: '', redirectTo: 'list', pathMatch: 'full' },
        { path: 'create', component: UserCreateViewPageComponent },
        { path: 'list', component: UserListViewPageComponent },
        { path: 'edit/:ID', component: UserEditViewPageComponent },
        { path: 'parameters', component: UserParametersViewPageComponent },
        { path: 'change-password', component: UserChangePasswordViewPageComponent }
      ],
    canActivateChild: [
      adminGuard
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
