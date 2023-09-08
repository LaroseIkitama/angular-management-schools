import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, tap, throwError } from 'rxjs';
import { User } from '../models/user';


const apiUrl = 'https://ikitamalarose-managementschool-253c884ef773.herokuapp.com/management_of_schools/users';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) { }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(apiUrl + '/update', user).pipe(
      tap(() => {
        this.toastr.success(`User updated successfully!`, 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while updating the user.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  changePassword(userId: number, newPassword: string): Observable<User> {
    const params = new HttpParams().set('newPassword', newPassword);

    return this.http.post<User>(`${apiUrl}/change-password/${userId}`, null, { params }).pipe(
      tap(() => {
        this.toastr.success('Password changed successfully!', 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while changing the password.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  deleteUser(id: number) {
    return this.http.delete(`${apiUrl}/${id}/delete`).pipe(
      tap(() => {
        this.toastr.success('User successfully deleted!', 'Success');
      }),
      catchError((error) => {
        this.toastr.error('An error occurred while deleting the subject.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${apiUrl}/${id}`).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching the user.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  getUserByEmail(email: string): Observable<User> {
    const params = new HttpParams().set('email', email);

    return this.http.get<User>(apiUrl + '/getByEmail', { params }).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching the user.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  getUserByName(name: string): Observable<User> {
    const params = new HttpParams().set('name', name);

    return this.http.get<User>(apiUrl + '/getByName', { params }).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching the user.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(apiUrl).pipe(
      catchError((error) => {
        this.toastr.error('An error occurred while fetching users.', 'Error');
        return throwError(() => new Error(error));
      })
    );
  }
}
