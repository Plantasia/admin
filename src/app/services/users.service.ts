import { Observable } from 'rxjs';
import { UserModel } from './../models/user-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl="http://localhost:3333/users/admin"
  constructor(private HttpClient:HttpClient) { }

  getUsers():Observable<UserModel[]>{
    return this.HttpClient.get<UserModel[]>(this.baseUrl)
  }
}
