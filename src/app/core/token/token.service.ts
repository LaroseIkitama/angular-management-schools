import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  // Méthode pour enregistrer un token dans le localStorage
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // Méthode pour récupérer le token depuis le localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Méthode pour supprimer le token du localStorage
  removeToken(): void {
    localStorage.removeItem('token');
  }
}
