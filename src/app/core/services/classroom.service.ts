import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Classroom } from '../models/classroom';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Subject } from '../models/subject';
import { Student } from '../models/student';

const apiUrl = 'https://ikitamalarose-managementschool-253c884ef773.herokuapp.com/management_of_schools/classrooms';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
  ) { }

  createClassroom(classroom: Classroom): Observable<Classroom> {

    return this.http.post<Classroom>(apiUrl + '/create', classroom).pipe(
      tap(() => {
        this.toastr.success(`${classroom.name}  created successfully!`, 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while creating the classroom.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  getClassroom(id: number): Observable<Classroom> {
    return this.http.get<Classroom>(`${apiUrl}/${id}`).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching the classroom.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }


  getClassrooms(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(apiUrl).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching classrooms.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  updateClassroom(classroom: Classroom): Observable<Classroom> {
    return this.http.put<Classroom>(apiUrl + '/update', classroom).pipe(
      tap(() => {
        this.toastr.success(`Classroom ${classroom.name} successfully!`, 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while updating the classroom.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  deleteClassroom(id: number) {
    return this.http.delete(`${apiUrl}/${id}/delete`).pipe(
      tap(() => {
        this.toastr.success('Classroom successfully deleted!', 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while deleting the classroom.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  getSubjectsInClassroom(classroomId: number): Observable<Subject[]> {
    return this.http.get<Subject[]>(`${apiUrl}/${classroomId}/subjects`).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching subjects in the classroom.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  getStudentsInClassroom(classroomId: number): Observable<Student[]> {
    return this.http.get<Student[]>(`${apiUrl}/${classroomId}/students`).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching students in the classroom.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

}
