import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Conexión al backend
  private URL = 'http://localhost:4000/api';

  constructor(private http: HttpClient, private router:Router) { }

  register(user:any) {
    return this.http.post<any>(this.URL + '/register', user);
  }

  login(user:any) {
    return this.http.post<any>(this.URL + '/login', user);
  }

  trans() {
    this.router.navigate(['/private-trans']);
  }

  pay() {
    this.router.navigate(['/private-pay']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  loggedin() {
    return !!localStorage.getItem('token');
  }

}
