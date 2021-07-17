import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IPost } from '../Shared Classes and types/IPost';
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http:HttpClient) { }
  _url="/assets/Data/Posts.json";
  getPosts():Observable<IPost[]>
  {
    return this.http.get<IPost[]>(this._url).pipe(
      catchError(
      (err)=> 
      {
         return  throwError(err.message||"Server Found");
      }
    ));
  }
}
