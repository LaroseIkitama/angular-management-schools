import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Classroom } from 'src/app/core/models/classroom';
import { Subject } from 'src/app/core/models/subject';
import { ClassroomService } from 'src/app/core/services/classroom.service';
import { SubjectService } from 'src/app/core/services/subject.service';

@Component({
  selector: 'app-subject-add-to-classroom',
  templateUrl: './subject-add-to-classroom.component.html',
  styleUrls: ['./subject-add-to-classroom.component.scss','../../../../shared/styles/common-styles.scss']
})
export class SubjectAddToClassroomComponent implements OnInit {
  form!: FormGroup;
  subjects: Subject[] = []; // Populate this array with available subjects
  classrooms: Classroom[] = [];

  constructor(
    private fb: FormBuilder,
    private subjectService: SubjectService,
    private classroomService: ClassroomService,
    private router: Router
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      subject: [null, Validators.required], // Set default to null and add Validators.required
      classroom: [null, Validators.required] // Set default to null and add Validators.required
    });

    this.loadClassrooms();
    this.loadSubjects();
  }

  loadSubjects() {

    this.subjectService.getSubjects().subscribe(
      subjects => {
        this.subjects = subjects;
      }
    );

  }

  loadClassrooms() {

    this.classroomService.getClassrooms().subscribe(
      classrooms => {
        this.classrooms = classrooms;
      }
    );

  }

  get subject() {
    return this.form.get('subject');
  }

  get classroom() {
    return this.form.get('classroom');
  }

  isInvalid(control: any): boolean {
    return control?.invalid && (control?.dirty || control?.touched);
  }

  isRequiredError(control: any): boolean {
    return control?.hasError('required');
  }

  onSubmit() {

    if (this.form.valid) {

      const subjectId: number = this.form.value.subject;
      const classroomId: number = this.form.value.classroom;

      this.subjectService.assignSubjectToClassroom(subjectId, classroomId).pipe(
        tap(() => this.router.navigateByUrl('/navigation/subjects/list'))
      ).subscribe();
    } else {
      this.form.markAllAsTouched();
    }
  }
}
