import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-admin-manager-profil',
  templateUrl: './home-admin-manager-profil.component.html',
  styleUrls: ['./home-admin-manager-profil.component.scss']
})
export class HomeAdminManagerProfilComponent {
  constructor(private router: Router) { }

  manageClassrooms(): void {
    this.router.navigate(['/navigation/classrooms/create']);
  }

  manageStudents(): void {
    this.router.navigate(['/navigation/students/create']);
  }

  manageGrades(): void {
    this.router.navigate(['/navigation/grades/create']);
  }

  manageSubjects(): void {
    this.router.navigate(['/navigation/subjects/create']);
  }
}
