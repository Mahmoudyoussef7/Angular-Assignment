import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IComment } from '../Shared Classes and types/IComment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  url="/assets/Data/Comments.json" ;

  getComments():Observable<IComment[]>
  {
    return this.http.get<IComment[]>(this.url).pipe(
      catchError(
      (err)=> 
      {
         return  throwError(err.message||"Server Found");
      }
    ));
  }
}
