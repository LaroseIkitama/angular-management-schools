import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private readonly SESSION_STORAGE_KEY = 'userSession';


  constructor() { }
  createSession(userId: number, username: string, role: string): void {
    const session = { userId, username, role };
    sessionStorage.setItem(this.SESSION_STORAGE_KEY, JSON.stringify(session));
  }
  getSession(): { userId: number, username: string, role: string } | null {
    const sessionData = sessionStorage.getItem(this.SESSION_STORAGE_KEY);
    if (sessionData) {
      return JSON.parse(sessionData);
    }
    return null;
  }

  clearSession(): void {
    sessionStorage.removeItem(this.SESSION_STORAGE_KEY);
  }

}
