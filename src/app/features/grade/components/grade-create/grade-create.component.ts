import { Component, Inject, OnInit } from '@angular/core';
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
  selector: 'app-grade-create',
  templateUrl: './grade-create.component.html',
  styleUrls: ['./grade-create.component.scss', '../../../../shared/styles/common-styles.scss']
})
export class GradeCreateComponent implements OnInit {

  form!: FormGroup;

  students: Student[] = [];
  subjects: Subject[] = [];

  gradeType = GradeType;


  constructor(
    private gradeService: GradeService,
    private studentService: StudentService,
    private subjectService: SubjectService,
    private router: Router,
    @Inject('GradeForm') private sharedForm: FormGroup
  ) {
    this.form = this.sharedForm;
  }

  ngOnInit() {

    this.loadStudents();
    this.loadSubjects();

  }

  private loadStudents() {
    this.studentService.getStudents().subscribe(
      (students: Student[]) => {
        this.students = students;
      }
    );
  }

  private loadSubjects() {
    this.subjectService.getSubjects().subscribe(
      (subjects: Subject[]) => {
        this.subjects = subjects;
      }
    );
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

      this.gradeService.createGrade(this.form.value).pipe(
        tap(() => this.router.navigateByUrl('/navigation/grades/list'))
      ).subscribe();
    } else {
      this.form.markAllAsTouched();
    }
  }

}
