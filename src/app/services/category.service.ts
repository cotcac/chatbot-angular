import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  baseUrl: string = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) { }
  getCategory():Observable<any> {
    return this.http.get(this.baseUrl + '/category/list', httpOptions)
  }
}
