import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('token')
  })
};
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  baseUrl:string = environment.baseUrl;
  private post = new BehaviorSubject<any>(null);
  cast = this.post.asObservable();//* cast it to all component.
  constructor(
    private http:HttpClient
  ) { }
  newPosts():Observable<any> {
    return this.http.get(this.baseUrl + '/posts/list', httpOptions);
  }
  category(id):Observable<any> {
    return this.http.get(this.baseUrl + '/posts/category/' +id, httpOptions)
  }
  detailCategory(id){
    this.http.get(this.baseUrl + '/posts/' + id, httpOptions)
    .subscribe(res =>{
      this.post.next(res);
    })
  }
  detail(id):Observable<any>{
    return this.http.get(this.baseUrl + '/posts/' + id, httpOptions);
  }
  insert(data):Observable<any> {
    return this.http.post(this.baseUrl + '/posts/insert', data, httpOptions);
  }
  update(id, data):Observable<any>{
    return this.http.put(this.baseUrl + '/posts/' + id , data, httpOptions);
  }
}
