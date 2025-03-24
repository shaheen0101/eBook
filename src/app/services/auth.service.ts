import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userInfo$ = new BehaviorSubject<any>(this.getUserInfo()); 
  private url = "api/auth";
  private headers = new HttpHeaders({ "Content-Type": "application/json" });
  options = { headers: this.headers };

  constructor(private http: HttpClient) {}

  login(username: string, password: string){
    const data = JSON.stringify({ username, password });
   // return this.http.post(`/${this.url}/login`, data, this.options);
    const user={
      id: "asd24sdsf",
      name: "Jack",
      role: "Reader",
      phoneNo: "234234 234223",
      token: "token-key"
    }
    localStorage.setItem('token', user.token);
    localStorage.setItem('User', JSON.stringify(user));
    this.userInfo$.next(user);
    return of(true);
  }

  signup(username: string, password: string) {
    const data = JSON.stringify({ username, password });
   // return this.http.post(`/${this.url}/signup`, data, this.options);
    return of(true);
  }

  logout() {
    this.userInfo$.next(null);
    localStorage.clear();
  }

  getToken() {
    return localStorage.getItem('token');
  }

  getUserInfo() {
    const data= localStorage.getItem('User') || '';
    return data ? JSON.parse(data) : null;
  }

  isAuthenticated() {
    return !!this.getToken();
  }
}
