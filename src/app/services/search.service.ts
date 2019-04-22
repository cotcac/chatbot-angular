import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  baseUrl:string = environment.baseUrl;
  constructor(
    private http: HttpClient,
  ) { }
  search(data:string):Observable<any>{
    console.log('he im on service:', data);

     return this.http.get(this.baseUrl +'/api/search?q=' + data);
  }
}
