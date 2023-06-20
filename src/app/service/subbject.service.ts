import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubbjectService {

  constructor(private http:HttpClient ) { }

  // các phương thức khác 
  getList(): Observable<any> {
    return this.http.get<any>('http://localhost:4200/main');

  }
  getById(): Observable<any>{
    return this.http.get<any>('http://localhost:4200/main/1');
 
  }
}
