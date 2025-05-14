import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private api = 'http://localhost:3000/api/comments';   //API for comments

  constructor(private http: HttpClient) {}    //injecting httpclient

  getComments(): Observable<any[]> {    //api call to get all comments
    return this.http.get<any[]>(this.api);
  }

  addComment(comment: any): Observable<any> {   //api call to add comments
    return this.http.post(this.api, comment);
  }
}
