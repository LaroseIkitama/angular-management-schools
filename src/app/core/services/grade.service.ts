import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Grade } from '../models/grade';
import { Observable, catchError, tap, throwError } from 'rxjs';

const apiUrl = 'https://ikitamalarose-managementschool-253c884ef773.herokuapp.com/management_of_schools/grades';

@Injectable({
  providedIn: 'root'
})
export class GradeService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  createGrade(grade: Grade): Observable<Grade> {
    return this.http.post<Grade>(apiUrl + '/create', grade).pipe(
      tap(() => {
        this.toastr.success('Grade created successfully!', 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while creating the grade.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  getGrade(id: number): Observable<Grade> {
    return this.http.get<Grade>(`${apiUrl}/${id}`).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching the grade.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  getGrades(): Observable<Grade[]> {
    return this.http.get<Grade[]>(apiUrl).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching grades.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  updateGrade(grade: Grade): Observable<Grade> {
    return this.http.put<Grade>(apiUrl + '/update', grade).pipe(
      tap(() => {
        this.toastr.success('Grade updated successfully!', 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while updating the grade.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  deleteGrade(id: number) {
    return this.http.delete(`${apiUrl}/${id}/delete`).pipe(
      tap(() => {
        this.toastr.success('Grade successfully deleted!', 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while deleting the grade.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

}
