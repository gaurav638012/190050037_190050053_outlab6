import { Injectable } from '@angular/core';
import {Data} from './data';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  
  constructor(private http:HttpClient) { }

  getData():Observable<Data>{
    return this.http.get<Data>("https://cs251-outlab-6.herokuapp.com/initial_values/");
  }
  post(data:Data){
    return this.http.post("https://cs251-outlab-6.herokuapp.com/add_new_feedback/",data);
  }
}
