import { UserModel } from './../models/user-model';
import { Observable } from 'rxjs';
import { CommentModel, CommentToBackend } from './../models/comment-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  adminURL='http://localhost:3333/forum/comments/admin/list'
  baseURL ='http://localhost:3333/forum/comments/'
  constructor(private httpClient:HttpClient) { }

  getComments():Observable<CommentModel[]>{
    return this.httpClient.get<CommentModel[]>(this.adminURL)
  }

  public  getCommentById(id:string):Observable<CommentModel>{
    var resp = this.httpClient.get<CommentModel>(this.baseURL+id);
    return resp;
  }

  public create(newComment: CommentModel):Observable<CommentModel>{
    return this.httpClient.post<CommentModel>(
      this.baseURL, newComment
      );
  }

  public update(comment: CommentModel): Observable<CommentModel>{


    return this.httpClient.patch<CommentModel>(
      this.baseURL+comment.id,
      comment
      )
  }
}
