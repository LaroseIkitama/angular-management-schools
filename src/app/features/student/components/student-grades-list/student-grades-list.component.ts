import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Grade } from 'src/app/core/models/grade';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-student-grades-list',
  templateUrl: './student-grades-list.component.html',
  styleUrls: ['./student-grades-list.component.scss', '../../../../shared/styles/common-styles.scss']
})
export class StudentGradesListComponent implements OnInit {
  @Input() STUDENT_ID!: number;
  dataSource: MatTableDataSource<Grade> = new MatTableDataSource<Grade>([]);

  grades!: Grade[];

  totalGrades: number = 0;

  constructor(
    private studentService: StudentService,
  ) { }

  ngOnInit(): void {
    this.loadGrades(this.STUDENT_ID);
  }

  private loadGrades(studentId: number) {
    this.studentService.getGradesOfStudent(studentId).subscribe(
      grades => {
        this.dataSource = new MatTableDataSource(grades);
        this.totalGrades = grades.length;
      }
    );
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
