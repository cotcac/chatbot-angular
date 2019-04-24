import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
export class FeedbackService {
  baseUrl:string = environment.baseUrl;
  constructor(
    private http: HttpClient
  ) { }
  getList(page?:number):Observable<any> {
    if(!page) page =1;
    return this.http.get(
      this.baseUrl + '/api/feedback?page=' + page,
      httpOptions
      );
  }
  delete(id:number):Observable<any> {
    return this.http.delete(this.baseUrl +'/api/feedback/'+id, httpOptions);
  }

}
