import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token'),
  })
};
@Injectable({
  providedIn: 'root'
})
export class ResponsesService {
  baseUrl:string = environment.baseUrl;
  private post = new BehaviorSubject<any>(null);
  cast = this.post.asObservable();//* cast it to all component.
  constructor(
    private http:HttpClient
    ) { }
    getList(page?:number):Observable<any> {
      if(!page) page =1;
      return this.http.get(
        this.baseUrl + '/api/responses?page=' + page,
        httpOptions
        );
    }
    detail(id:number):Observable<any>{
      return this.http.get(this.baseUrl + '/api/responses/' + id, httpOptions);
    }
    insert(data):Observable<any> {
      return this.http.post(this.baseUrl + '/api/responses/', data, httpOptions);
    }
    update(id, data):Observable<any>{
      return this.http.patch(this.baseUrl + '/api/responses/' + id , data, httpOptions);
    }
    delete(id):Observable<any>{
      return this.http.delete(this.baseUrl + '/api/responses/'+ id, httpOptions);
    }
}
