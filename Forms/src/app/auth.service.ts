import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _HttpClient:HttpClient) { }

  signup(userData:object):Observable<any>{
    return this._HttpClient.post('http://route-egypt-api-herokuapp.com/signup/', userData)
  }

  signin(userData:object):Observable<any>{
    return this._HttpClient.post('http://route-egypt-api-herokuapp.com/signup/', userData)
  }
}
