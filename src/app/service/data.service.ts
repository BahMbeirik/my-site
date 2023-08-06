import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  submitted(value: any) {
    throw new Error('Method not implemented.');
  }
  // apiUrl='http://127.0.0.1:8000'

  constructor(private http : HttpClient) { }

  registerUser(data: any){
    return this.http.post('http://127.0.0.1:8000' + '/api/register/',data)
  }

  login(data : any){
    return this.http.post('http://127.0.0.1:8000' + '/api/login/',data)
  }

  contact(data : any){
    return this.http.post('http://127.0.0.1:8000' + '/api/contact/',data)
  }


}
