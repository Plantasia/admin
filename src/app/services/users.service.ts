import { Observable } from 'rxjs';
import { UserModel } from './../models/user-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  adminFindAll = "http://localhost:3333/users/admin/findall"
  baseURL = "http://localhost:3333/users/"
  constructor(private HttpClient:HttpClient) { }

  getUsers():Observable<UserModel[]>{
    return this.HttpClient.get<UserModel[]>(this.adminFindAll)
  }

  getUserById(id:string): Observable<UserModel>{
    return this.HttpClient.get<UserModel>(this.baseURL+id+'/admin')
  }

  update(id:string, data:UserModel): Observable<UserModel>{
    return this.HttpClient.post<UserModel>(this.baseURL+"admin/"+id, data)
  }
}
