import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from 'src/app/core/models/student';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-student-show',
  templateUrl: './student-show.component.html',
  styleUrls: ['./student-show.component.scss','../../../../shared/styles/common-styles.scss']
})
export class StudentShowComponent implements OnInit {
  student: Student = new Student();

  @Input()
  STUDENT_ID!: number;
  constructor(
    private router: Router,
    private studentService: StudentService,
  ) { }

  ngOnInit(): void {
    this.studentService.getStudent(this.STUDENT_ID).subscribe(student => {
      this.student = student;
    });
  }

  goBack() {
    this.router.navigate(['/navigation/students/list']);
  }
}
