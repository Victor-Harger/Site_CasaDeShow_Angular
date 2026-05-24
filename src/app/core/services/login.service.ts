import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost:3000/funcionarios';

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.get(
      `${this.api}?username=${username}&password=${password}`
    );
  }
}