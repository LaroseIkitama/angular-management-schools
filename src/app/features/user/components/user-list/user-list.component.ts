import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { switchMap, tap } from 'rxjs';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { SessionService } from 'src/app/core/session/session.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss', '../../../../shared/styles/common-styles.scss']
})
export class UserListComponent implements OnInit {
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);

  users!: User[];

  totalUsers: number = 0;

  constructor(
    private userService: UserService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  /* private loadUsers() {
    this.userService.getUsers().subscribe(users => {
      this.dataSource = new MatTableDataSource(users);
      this.totalUsers = users.length;
    });
  } */

  private loadUsers() {
    this.userService.getUsers().subscribe(users => {
      // Exclure l'utilisateur actuellement connecté
      const session = this.sessionService.getSession();
      if (session) {
        this.users = users.filter(user => user.id !== session.userId);
        // Si l'utilisateur actuel est "Admin", exclure également les "SuperAdmin"
        if (session.role === 'Admin') {
          this.users = this.users.filter(user => user.role !== 'SuperAdmin');
        }
      }

      this.dataSource = new MatTableDataSource(this.users);
      this.totalUsers = this.users.length;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(id: number) {
    this.userService.deleteUser(id)
      .pipe(
        switchMap(() => this.userService.getUsers()),
        tap(users => {
          this.users = users;
          this.dataSource.data = users;
          this.dataSource._updateChangeSubscription();
          this.totalUsers = users.length;
        })
      )
      .subscribe();
  }
}
