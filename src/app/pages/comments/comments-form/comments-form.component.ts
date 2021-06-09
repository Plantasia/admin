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
  comment: CommentModel = new CommentModel;



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

    console.log(updateComment);
    this.service.update(updateComment).subscribe(
      (c) => {
        toastr.success(`Comentário atualizado!`)
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

          this.userService
            .getUserById(comment.userId)
            .subscribe(
              (owner) => {
                this.comment.user = owner;
              }
            );

          this.topicsService
            .getTopicById(comment.topicId)
            .subscribe(
              (topic) => {
                this.comment.topic = topic;
              }
            )
          console.log("thiscomment")
          console.log(comment);
        }
      )

    }

  }
}
