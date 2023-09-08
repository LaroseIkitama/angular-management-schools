import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { Classroom } from 'src/app/core/models/classroom';
import { Gender, Student } from 'src/app/core/models/student';
import { ClassroomService } from 'src/app/core/services/classroom.service';
import { StudentService } from 'src/app/core/services/student.service';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss', '../../../../shared/styles/common-styles.scss']
})
export class StudentCreateComponent implements OnInit {

  form!: FormGroup;
  classrooms: Classroom[] = [];

  genderType = Gender;

  constructor(
    private toastr: ToastrService,
    private studentService: StudentService,
    private classroomService: ClassroomService,
    private router: Router,
    @Inject('StudentForm') private sharedForm: FormGroup // Inject the shared form

  ) {
    this.form = this.sharedForm;
  }

  ngOnInit() {
    this.classroomService.getClassrooms().subscribe(
      (classrooms: Classroom[]) => {
        this.classrooms = classrooms;
      }
    );
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
      const selectedClassroom = this.form.value.classroom;

      if (selectedClassroom) {

        const maxCapacity = selectedClassroom.maximum_capacity;
        this.classroomService.getStudentsInClassroom(selectedClassroom.id).subscribe(
          (students: Student[]) => {
            if (students.length < maxCapacity) {

              this.setFormValueRegistration(this.generateRegistrationNumber());

              this.studentService.createStudent(this.form.value).pipe(
                tap(() => {
                  this.form.reset();
                  this.router.navigateByUrl('/navigation/students/list');
                })
              ).subscribe();


            } else {
              this.toastr.error('La capacité maximale de la classe a été atteinte.', 'Erreur');
            }
          }
        );
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  generateRegistrationNumber(): string {
    // Générer un identifiant unique (par exemple, une chaîne aléatoire de 4 caractères)
    const uniqueId = Math.random().toString(36).substring(2, 6);
    // Générer une chaîne de chiffres aléatoires (par exemple, 4 chiffres)
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    // Concaténer le préfixe "YK" avec la première lettre de la salle de classe,
    // l'identifiant unique et les chiffres aléatoires
    return `YKSDK${uniqueId}0o0${randomNumber}`;
  }


  private setFormValueRegistration(registrationNumber: string) {
    this.form.patchValue({ registrationNumber: registrationNumber });
  }

}
