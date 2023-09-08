import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Grade, GradeType } from 'src/app/core/models/grade';
import { Student } from 'src/app/core/models/student';
import { Subject } from 'src/app/core/models/subject';
import { GradeService } from 'src/app/core/services/grade.service';
import { StudentService } from 'src/app/core/services/student.service';
import { SubjectService } from 'src/app/core/services/subject.service';

@Component({
  selector: 'app-grade-edit',
  templateUrl: './grade-edit.component.html',
  styleUrls: ['./grade-edit.component.scss', '../../../../shared/styles/common-styles.scss']
})
export class GradeEditComponent implements OnInit {

  @Input()
  GRADE_ID!: number;

  grade !: Grade;
  students: Student[] = [];
  subjects: Subject[] = [];

  gradeType = GradeType;

  form!: FormGroup;

  constructor(
    private router: Router,
    private gradeService: GradeService,
    private studentService: StudentService,
    private subjectService: SubjectService,
    @Inject('GradeForm') private sharedForm: FormGroup
  ) {
    this.form = this.sharedForm;
  }

  ngOnInit(): void {
    this.loadGrade(this.GRADE_ID);
  }

  private loadGrade(gradeId: number) {
    this.gradeService.getGrade(gradeId)
      .subscribe(grade => {
        this.grade = grade;

        if (this.grade.student.id && this.grade.subject.id) {

          this.loadStudents();
          this.loadSubjects();
          this.loadForm(this.grade);

        }
      });
  }

  private loadStudents() {

    this.studentService.getStudents()
      .subscribe(
        students => {
          this.students = students;
        }
      );
  }

  private loadSubjects() {
    this.subjectService.getSubjects()
      .subscribe(
        subjects => {
          this.subjects = subjects;
        }
      );
  }

  private loadForm(grade: Grade) {
    this.form.setValue({
      id: grade.id,
      score: grade.score,
      comment: grade.comment,
      type: grade.type,
      student: grade.student,
      subject: grade.subject
    });
  }

  get score() {
    return this.form.get('score');
  }

  get comment() {
    return this.form.get('comment');
  }

  get type() {
    return this.form.get('type');
  }

  get student() {
    return this.form.get('student');
  }

  get subject() {
    return this.form.get('subject');
  }

  isInvalid(control: any): boolean {
    return control?.invalid && (control?.dirty || control?.touched);
  }

  isRequiredError(control: any): boolean {
    return control?.hasError('required');
  }


  onSubmit() {
    if (this.form.valid) {

      this.gradeService.updateGrade(this.form.value).pipe(
        tap(() => this.router.navigateByUrl('/navigation/grades/list'))
      ).subscribe();
    } else {
      this.form.markAllAsTouched();
    }
  }

  goBack() {
    this.router.navigate(['/navigation/grades/list']);
  }
}
