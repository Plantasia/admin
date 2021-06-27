import { TopicModel } from 'src/app/models/topic-model';
import { CommentModel, CommentToBackend } from './../../../models/comment-model';
import { CommentsService } from './../../../services/comments.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import toastr from 'toastr';
import { switchMap } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
import { UserModel } from 'src/app/models/user-model';
import { TopicsService } from 'src/app/services/topics.service';
@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {

  currentAction: string;
  isCreating: boolean;
  commentForm: FormGroup;
  pageName: string;
  errorMessages: string[] = null;
  submittingForm: boolean = false;
  nameButton: string;
  comment: CommentModel = new CommentModel();
  topic: TopicModel = new TopicModel();
  user: UserModel = new UserModel();
  deleted: boolean =true;




  constructor(
    private service: CommentsService,
    private userService: UsersService,
    private topicsService: TopicsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }
  ngAfterViewInit(): void {

  }

  ngOnInit() {
    this.setCurrentAction();
    this.buildcommentForm();
    this.loadcomment();
    this.setPageName();
  }

  private buildcommentForm() {

    this.commentForm = new FormGroup({
      textBody: new FormControl('', [
        Validators.minLength(10)
      ]),
      id: new FormControl('', [
        Validators.requiredTrue
      ]),

      name: new FormControl('', [
        Validators.requiredTrue
      ]),

      author: new FormControl('', [
        Validators.requiredTrue
      ]),

      topic: new FormControl('', [
        Validators.requiredTrue
      ]),

      created_at: new FormControl('', [
        Validators.requiredTrue
      ]),

      updated_at: new FormControl('', [
        Validators.requiredTrue
      ]),

      deleted_at: new FormControl('', [
      ]),
    })
  }

  private setCurrentAction() {
    if (this.route.snapshot.url[0].path === 'new') {

      this.currentAction = 'new';

    }
    else {
      this.currentAction = 'edit';

    }
  }

  private changeStatus(comment:CommentModel, event: any) {
    if (comment.deleted_at == null) {
      comment.deleted_at = new Date().toISOString();
      console.log("STATUS ANTERIOR: ATIVO")
      console.log("STATUS ATUAL:DELETADO")
      console.log(comment.deleted_at)
    }
    else {
      comment.deleted_at = null;
      console.log("STATUS ANTERIOR :DELETADO")
      console.log("STATUS ATUAL: ATIVO")
      console.log(comment.deleted_at)
    } 
  }

  private setPageName() {
    if (this.currentAction == 'new') {
      this.pageName = "Novo Comentário"
      this.nameButton = "Criar"
      this.isCreating = true
    }

    else {
      this.pageName = "Editar "
      this.isCreating = false;
      this.nameButton = "Editar"
    }
  }

  private createcomment() {
    const newcomment: CommentModel =
      Object.assign(new CommentModel(), this.commentForm.value)

    this.service.create(newcomment).subscribe(
      (c) => {
        console.log(c)
        toastr.success(`Comentário criado`)
        this.submittingForm = false;
      })

  }

  

  private updatecomment() {

    var updateComment = new CommentModel();
    updateComment.id = this.comment.id;
    updateComment.textBody = this.commentForm.get('textBody').value;
    updateComment.deleted_at = this.comment.deleted_at;
    console.log(updateComment);
    this.service.update(updateComment).subscribe(
      (c) => {
        toastr.success(`Comentário atualizado!`)
        console.log(c);
        this.submittingForm = false;
      }
    )
  }

  submit() {
    this.submittingForm = true;

    if (this.currentAction === 'new') {
      this.createcomment()
    }

    else {
      this.updatecomment()
    }
  }

  private loadcomment() {
    if (this.currentAction === 'edit') {
      this.route.paramMap.pipe(
        switchMap(
          params => this.service.getCommentById(params.get('id'))
        )
      ).subscribe(
        (comment) => {
          this.comment = comment;
          this.commentForm.patchValue(comment);

          if (this.comment.deleted_at) {
            this.deleted = true;
          }
          console.log("esse é o comentário")
          console.log(this.comment)

          this.userService
            .getUserById(comment.user.id)
            .subscribe(
              (owner) => {
                this.user = owner;
                console.log("esse é o usuário")
                console.log(this.user)
              }
            );

          this.topicsService
            .getTopicById(comment.topic.id)
            .subscribe(
              (topic) => {
                this.topic = topic;
                console.log("esse é o tópico")
                console.log(this.user)
              }
          )
        }
      )

    }
    

  }

  
}
