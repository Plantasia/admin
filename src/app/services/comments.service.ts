import { UserModel } from './../models/user-model';
import { Observable } from 'rxjs';
import { CommentModel } from './../models/comment-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  adminURL='http://localhost:3333/forum/comments/admin'
  baseURL ='http://localhost:3333/forum/comments'
  constructor(private httpClient:HttpClient) { }

  getComments():Observable<CommentModel[]>{
    return this.httpClient.get<CommentModel[]>(this.adminURL)
  }

  public  getCommentById(id:string):Observable<CommentModel>{
    var resp = this.httpClient.get<CommentModel>(this.baseURL);
    return resp;
  }

  public create(newComment: CommentModel):Observable<CommentModel>{
    return this.httpClient.post<CommentModel>(
      this.baseURL, newComment
      );
  }

  public update(comment: CommentModel):Observable<CommentModel>{
    return this.httpClient.put<CommentModel>(
      this.baseURL+comment.id,
      comment
      )
  }
}
