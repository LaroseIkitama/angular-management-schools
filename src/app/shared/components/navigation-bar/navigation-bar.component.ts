import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/core/session/session.service';
import { TokenService } from 'src/app/core/token/token.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  loggedInUserName: string = '';

  loggedInUserRole: string | undefined;

  constructor(
    private router: Router,
    private tokenService: TokenService,
    private sessionService: SessionService
  ) { }

  ngOnInit(): void {
    const session = this.sessionService.getSession();
   
    if (session) {
      this.loggedInUserRole = session.role;
      this.loggedInUserName = session.username;
    }

  }
  
  logout() {
    this.tokenService.removeToken();
    this.sessionService.clearSession();

    this.router.navigate(['/auth/login']);
  }

}
