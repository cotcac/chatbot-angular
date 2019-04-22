import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  baseUrl:string = environment.baseUrl;
  private isToken:boolean = !!localStorage.getItem('token');
  private isAuth = new BehaviorSubject<boolean>(this.isToken);
  cast = this.isAuth.asObservable();

  constructor(
    private http: HttpClient
  ) { }

  login(email:string, password:string):Observable<any> {
    return this.http.post(this.baseUrl + '/api/users/login',
    {email, password}
    )
  }
  getHome():Observable<any> {
    const a = localStorage.getItem('token')
    return this.http.get(this.baseUrl + '/');
  }

  logout(){
    localStorage.removeItem('token');
    this.updateAuth();
  }

  updateAuth(){
    this.isAuth.next(!!localStorage.getItem('token'));
  }
  // check login
  get isLogin() {
    return !!localStorage.getItem('token');
 }

}
