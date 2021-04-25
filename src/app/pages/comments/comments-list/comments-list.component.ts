import { CommentModel } from './../../../models/comment-model';
import { CommentsService } from './../../../services/comments.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user-model';

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
  styleUrls: ['./comments-list.component.css']
})
export class CommentsListComponent implements OnInit {
  comments: CommentModel[];
  constructor(private service:CommentsService) { }

  ngOnInit() {
    this.getComments();
  }

  getComments(){
    this.service.getComments().subscribe((comments)=>{
      this.comments = comments;
      console.log(comments);
    })
  }

}
