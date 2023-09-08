import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { UserService } from 'src/app/core/services/user.service';
import { SessionService } from 'src/app/core/session/session.service';

@Component({
  selector: 'app-user-parameters',
  templateUrl: './user-parameters.component.html',
  styleUrls: ['./user-parameters.component.scss','../../../../shared/styles/common-styles.scss']
})
export class UserParametersComponent implements OnInit {
  user = new User();

  constructor(
    private router: Router,
    private userService: UserService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {

    const sessionData = this.sessionService.getSession();
    if (sessionData) {
      const userId = sessionData.userId;
      this.userService.getUser(userId)
        .subscribe(
          user => {
            this.user = user;
          }
        );
    }
  }

  submitForm() {
    this.userService.updateUser(this.user).subscribe(
      updatedUser => {
        this.user = updatedUser;
        const sessionData = this.sessionService.getSession();
        if (sessionData) {
          this.sessionService.createSession(sessionData.userId, updatedUser.name, sessionData.role);
        }
      }
    );

    this.router.navigateByUrl('/navigation/home');
  }

}
