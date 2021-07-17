import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../Shared Classes and types/IUser';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  _url = "/assets/Data/User.json";

  getUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  }
}
