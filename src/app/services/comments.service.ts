import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  constructor(private http: HttpClient) {}

  getComments(userId) {
    return this.http.get(`http://localhost:3100/comments?authorId=${userId}`);
  }
}
