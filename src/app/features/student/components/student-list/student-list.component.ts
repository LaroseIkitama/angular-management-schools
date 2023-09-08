import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap, tap } from 'rxjs';
import { Student } from 'src/app/core/models/student';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss', '../../../../shared/styles/common-styles.scss']
})
export class StudentListComponent implements OnInit {
  dataSource: MatTableDataSource<Student> = new MatTableDataSource<Student>([]);

  students!: Student[];

  totalStudents: number = 0;

  constructor(
    private studentService: StudentService,
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  private loadUsers() {
    this.studentService.getStudents().subscribe(students => {
      this.dataSource = new MatTableDataSource(students);
      this.totalStudents = students.length;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteStudent(id: number) {
    this.studentService.deleteStudent(id)
      .pipe(
        switchMap(() => this.studentService.getStudents()),
        tap(students => {
          this.students = students;
          this.dataSource.data = students;
          this.dataSource._updateChangeSubscription();
          this.totalStudents = students.length;
        })
      )
      .subscribe();
  }

}
