import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private api = 'http://localhost:3000/api/users';    //api url

  constructor(private http: HttpClient) {}    //injecting httpclient

  getUsers(): Observable<any[]> {   //api call for getting users 
    return this.http.get<any[]>(this.api);
  }

  addUser(user: any): Observable<any> {   //api call for adding user
    return this.http.post(this.api, user);
  }
}
