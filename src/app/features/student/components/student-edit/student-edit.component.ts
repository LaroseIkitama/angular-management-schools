import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { Classroom } from 'src/app/core/models/classroom';
import { Gender, Student } from 'src/app/core/models/student';
import { ClassroomService } from 'src/app/core/services/classroom.service';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.scss', '../../../../shared/styles/common-styles.scss']
})
export class StudentEditComponent implements OnInit {

  form!: FormGroup;
  student!: Student;
  classrooms: Classroom[] = [];
  genderType = Gender;


  @Input()
  STUDENT_ID!: number;


  constructor(
    private router: Router,
    private studentService: StudentService,
    private classroomService: ClassroomService,
    @Inject('StudentForm') private sharedForm: FormGroup // Inject the shared form
  ) {
    this.form = this.sharedForm;
  }

  ngOnInit(): void {

    this.loadClassrooms();
    this.loadStudentAndForm(this.STUDENT_ID);
  }

  private loadStudentAndForm(studentId: number) {

    this.studentService.getStudent(studentId).subscribe(student => {
      this.student = student;
      
      if (this.student.classroom.id) {
        this.loadForm(this.student);
        console.log(this.form.value.classroom);
      }

    });
  }

  private loadForm(student: Student) {
    this.form.setValue({
      id: student.id,
      registrationNumber: student.registrationNumber,
      full_name: student.full_name,
      date_of_birth: student.date_of_birth,
      address: student.address,
      email: student.email,
      phone_number: student.phone_number,
      gender: student.gender,
      classroom: student.classroom,
    });

  }

  private loadClassrooms() {
    this.classroomService.getClassrooms().subscribe(classrooms => {
      this.classrooms = classrooms;
    });
  }

  get registrationNumber() {
    return this.form.get('registrationNumber');
  }

  get full_name() {
    return this.form.get('full_name');
  }

  get date_of_birth() {
    return this.form.get('date_of_birth');
  }

  get address() {
    return this.form.get('address');
  }

  get email() {
    return this.form.get('email');
  }

  get phone_number() {
    return this.form.get('phone_number');
  }

  get classroom() {
    return this.form.get('classroom');
  }

  get gender() {
    return this.form.get('gender');
  }


  isInvalid(control: any): boolean {
    return control?.invalid && (control?.dirty || control?.touched);
  }

  isRequiredError(control: any): boolean {
    return control?.hasError('required');
  }

  isPatternError(control: any): boolean {
    return control?.hasError('pattern') || control?.hasError('email');
  }

  onSubmit() {
    if (this.form.valid) {
      this.studentService.updateStudent(this.form.value).pipe(
        tap(() => {
          this.router.navigate(['/navigation/students/list']);
        })
      ).subscribe();
    } else {
      this.form.markAllAsTouched();
    }
  }

  goBack() {
    this.router.navigate(['/navigation/students/list']);
  }

}
