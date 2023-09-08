import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grade } from 'src/app/core/models/grade';
import { GradeService } from 'src/app/core/services/grade.service';

@Component({
  selector: 'app-grade-show',
  templateUrl: './grade-show.component.html',
  styleUrls: ['./grade-show.component.scss','../../../../shared/styles/common-styles.scss']
})
export class GradeShowComponent implements OnInit {

  grade: Grade = new Grade();

  @Input()
  GRADE_ID!: number;

  constructor(
    private router: Router,
    private gradeService: GradeService
  ) { }

  ngOnInit(): void {
    this.gradeService.getGrade(this.GRADE_ID)
      .subscribe(
        grade => {
          this.grade = grade;
        }
      )
  }

  goBack() {
    this.router.navigate(['/navigation/grades/list']);
  }
}
