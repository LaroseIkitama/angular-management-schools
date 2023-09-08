import { CanActivateFn } from '@angular/router';
import { SessionService } from '../session/session.service';

export const adminGuard: CanActivateFn = (route, state) => {
  const sessionService = new SessionService();
  if (sessionService.getSession() && (sessionService.getSession()?.role==='Admin' || sessionService.getSession()?.role==='SuperAdmin' )) {
    return true;
  }
  return false;
};
