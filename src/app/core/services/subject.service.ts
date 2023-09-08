import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Subject } from '../models/subject';
import { Observable, catchError, tap, throwError } from 'rxjs';

const apiUrl='https://ikitamalarose-managementschool-253c884ef773.herokuapp.com/management_of_schools/subjects';


@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
    ) { }

  createSubject(subject: Subject): Observable<Subject> {
    return this.http.post<Subject>(apiUrl + '/create', subject).pipe(
      tap(() => {
        this.toastr.success(`${subject.name}  created successfully!`, 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while creating the subject.', 'Error');
        return throwError(() => new Error(error)); 
      })
    );
  }

  getSubject(id: number): Observable<Subject> {
    return this.http.get<Subject>(`${apiUrl}/${id}`).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching the subject.', 'Error');
        return throwError(() => new Error(error)); 
      })
    );
  }
  

  getSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(apiUrl).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching subjects.', 'Error');
        return throwError(() => new Error(error)); 
      })
    );
  }

  updateSubject(subject: Subject): Observable<Subject> {
    return this.http.put<Subject>(apiUrl + '/update', subject).pipe(
      tap(() => {
        this.toastr.success(`${subject.name}  updated successfully!`, 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while updating the subject.', 'Error');
        return throwError(() => new Error(error)); 
      })
    );
  }

  deleteSubject(id: number) {
    return this.http.delete(`${apiUrl}/${id}/delete`).pipe(
      tap(() => {
        this.toastr.success('Subject successfully deleted!', 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while deleting the subject.', 'Error');
        return throwError(() => new Error(error)); 
      })
    );
  }

  assignSubjectToClassroom(subjectId: number, classroomId: number): Observable<Subject> {
      return this.http.post<Subject>(`${apiUrl}/${subjectId}/add-to-classroom/${classroomId}`, null).pipe(
      tap(() => {
        this.toastr.success('Subject assigned to classroom successfully!', 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while assigning the subject to the classroom.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

}
