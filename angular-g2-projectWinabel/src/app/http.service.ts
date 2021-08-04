import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

    // private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    private usersUrl = 'https://jsonplaceholder.typicode.com/users';

    id:any;

  constructor(
      private http: HttpClient
  ) { }

  getUsers(){
    return this.http.get(this.usersUrl);
  }
//   getPosts(){
//     return this.http.get(this.postsUrl);
//   }
}
