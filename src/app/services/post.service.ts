import { Injectable, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Post} from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }
  
    getPostsData(): Observable<any> {
      return this.http.get("http://localhost:8081/api/posts");
    }

  private posts: Post[] = [];
  //private postsUpdated = new Subject<Post[]>();

  getPosts() {
    return [...this.posts];
  }

  // getPostUpdateListener() {
  //   return this.postsUpdated.asObservable();
  // }

  addPost(title: string, content: string):Observable<any> {
    const post: Post = {title: title, content: content};

    return this.http.post("http://localhost:8081/api/posts", post);

    //this.posts.push(post);
    //console.log(post);
    //console.log(this.posts);
    //this.postsUpdated.next([...this.posts]);
  }

}
