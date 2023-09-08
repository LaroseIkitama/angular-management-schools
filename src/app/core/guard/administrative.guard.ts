import { CanActivateFn, Router } from '@angular/router';
import { SessionService } from '../session/session.service';

export const administrativeGuard: CanActivateFn = (route, state) => {
  const sessionService = new SessionService();
  const router= new Router;
  if (sessionService.getSession() && sessionService.getSession()?.role === 'Administrative') {
    return true;
  }
  return false;


};


