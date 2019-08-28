import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  constructor(private http: HttpClient) {}

  getPosts(userId) {
    return this.http.get(`http://localhost:3100/posts?owner.id=${userId}`);
  }
}
