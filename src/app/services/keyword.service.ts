import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root'
})

export class KeywordService {
  baseUrl: string = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) { }
  create(data):Observable<any> {
    return this.http.post(this.baseUrl + '/api/keywords', data, httpOptions)
  }
  delete(id):Observable<any> {
    return this.http.delete(this.baseUrl +'/api/keywords/'+id, httpOptions);
  }
}
