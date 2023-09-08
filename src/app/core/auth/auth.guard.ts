import { CanActivateFn } from '@angular/router';
import { SessionService } from '../session/session.service';


export const authGuard: CanActivateFn = (route, state) => {
  const sessionService = new SessionService();

  console.log(state.url);

  if (!sessionService.getSession()) {
    return true;
  }
  return false;

};