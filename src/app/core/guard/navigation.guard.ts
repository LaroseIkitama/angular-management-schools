import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../session/session.service';
import { inject } from '@angular/core';

export const navigationGuard: CanActivateFn = (route, state) => {
  const sessionService = new SessionService();
  const router = inject(Router);

  if (sessionService.getSession()) {
    return true;
  }
  router.navigate(['/forbidden']);
  return false;
};
