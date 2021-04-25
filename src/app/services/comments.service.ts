import { UserModel } from './../models/user-model';
import { Observable } from 'rxjs';
import { CommentModel } from './../models/comment-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  baseUrl='http://localhost:3333/forum/comments/admin'
  constructor(private HttpClient:HttpClient) { }

  getComments():Observable<CommentModel[]>{
    return this.HttpClient.get<CommentModel[]>(this.baseUrl)
  }
}
