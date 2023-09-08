import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Classroom } from 'src/app/core/models/classroom';
import { ClassroomService } from 'src/app/core/services/classroom.service';

@Component({
  selector: 'app-classroom-create',
  templateUrl: './classroom-create.component.html',
  styleUrls: ['./classroom-create.component.scss','../../../../shared/styles/common-styles.scss']
})
export class ClassroomCreateComponent implements OnInit {
  minDate: string | undefined;
  form!: FormGroup;
  classroom = new Classroom();

  levelOptions: string[] = ['License 1', 'License 2', 'License 3', 'Master 1', 'Master 2', 'Master 3'];
  yearOptions: number[] = this.generateYearOptions(1990, 2050);

  constructor(
    private fb: FormBuilder,
    private classroomService: ClassroomService,
    private router: Router
  ) { }

  ngOnInit() {

    const currentDate = new Date().toISOString().split('T')[0];
    this.minDate = currentDate;

    this.initializeForm();
  }

  private initializeForm() {

    this.form = this.fb.group({
      id:[],
      name: ['', [Validators.required, Validators.pattern('^(?!\'|\\s)[a-zA-ZÀ-ÿ \']+$')]],
      level: ['', [Validators.required]],
      year: ['', [Validators.required]],
      maximum_capacity: ['', [Validators.required, Validators.pattern('[1-9][0-9]*')]],
    });
  }

  get name() {
    return this.form.get('name');
  }

  get level() {
    return this.form.get('level');
  }

  get year() {
    return this.form.get('year');
  }

  get maximum_capacity() {
    return this.form.get('maximum_capacity');
  }

  isInvalid(control: any): boolean {
    return control?.invalid && (control?.dirty || control?.touched);
  }

  isRequiredError(control: any): boolean {
    return control?.errors?.required;
  }

  isPatternError(control: any): boolean {
    return control?.errors?.pattern;
  }

  generateYearOptions(startYear: number, endYear: number): number[] {
    const years: number[] = [];
    for (let year = startYear; year <= endYear; year++) {
      years.push(year);
    }
    return years;
  }

  onSubmit() {
    if (this.form.valid) {
      this.createClassroom();
    } else {
      this.form.markAllAsTouched();
    }

  }

  private createClassroom() {
    const classroomData: Classroom = this.form.value;
    this.classroomService.createClassroom(classroomData).pipe(
      tap(() => this.router.navigateByUrl('/navigation/classrooms/list'))
    ).subscribe();
  }
}
