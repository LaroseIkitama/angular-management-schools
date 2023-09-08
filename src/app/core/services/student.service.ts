import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Student } from '../models/student';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { Grade } from '../models/grade';
import { Classroom } from '../models/classroom';

const apiUrl = 'https://ikitamalarose-managementschool-253c884ef773.herokuapp.com/management_of_schools/students';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(apiUrl + '/create', student).pipe(
      tap(() => {
        this.toastr.success(`${student.full_name}  created successfully!`, 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while creating the student.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  getStudent(id: number): Observable<Student> {
    return this.http.get<Student>(`${apiUrl}/${id}`).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching the student.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }


  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(apiUrl).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching classrooms.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  updateStudent(student: Student): Observable<Student> {
    return this.http.put<Student>(apiUrl + '/update', student).pipe(
      tap(() => {
        this.toastr.success(`${student.full_name}  updated successfully!`, 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while updating the student.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  deleteStudent(id: number) {
    return this.http.delete(`${apiUrl}/${id}/delete`).pipe(
      tap(() => {
        this.toastr.success('Student successfully deleted!', 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while deleting the student.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  getGradesOfStudent(studentId: number): Observable<Grade[]> {
    return this.http.get<Grade[]>(`${apiUrl}/${studentId}/grades`).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching grades.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  getClassroomOfStudent(student: Student): Observable<Classroom> {
    return this.http.post<Classroom>(`${apiUrl}/classroom`, student).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching the student\'s classroom.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  checkRegistrationNumberExists(registrationNumber: string): Observable<boolean> {
    return this.http.get<boolean>(`{apiUrl}/check-registration-number/${registrationNumber}`);
  }



}
