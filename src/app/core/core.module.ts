import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TopComputerScienceDescriptionComponent } from './components/top-computer-science-description/top-computer-science-description.component';
import { QualityMeetingDescriptionComponent } from './components/quality-meeting-description/quality-meeting-description.component';
import { BestEducationDescriptionComponent } from './components/best-education-description/best-education-description.component';
import { RouterModule } from '@angular/router';
import { HomeAdminManagerProfilComponent } from './components/home-admin-manager-profil/home-admin-manager-profil.component';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';


@NgModule({
  declarations: [
    NavbarComponent,
    TopComputerScienceDescriptionComponent,
    QualityMeetingDescriptionComponent,
    BestEducationDescriptionComponent,
    HomeAdminManagerProfilComponent,
    ForbiddenComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    TopComputerScienceDescriptionComponent,
    QualityMeetingDescriptionComponent,
    BestEducationDescriptionComponent,
    HomeAdminManagerProfilComponent,
    ForbiddenComponent,
  ]
})
export class CoreModule { }
