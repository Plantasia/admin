import { TopicModel } from 'src/app/models/topic-model';
import { CommentModel } from './../../../models/comment-model';
import { CommentsService } from './../../../services/comments.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import toastr from 'toastr';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-comments-form',
  templateUrl: './comments-form.component.html',
  styleUrls: ['./comments-form.component.css']
})
export class CommentsFormComponent implements OnInit {
  
  currentAction:string;
  isCreating:boolean;
  commentForm:FormGroup;
  pageName:string;
  errorMessages: string[]= null;
  submittingForm:boolean =false;
  nameButton:string;
  comment:CommentModel = new CommentModel;
  
  
  constructor(
    private service:CommentsService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder:FormBuilder 
    ) { }
    ngAfterViewInit(): void {
      
    }
    
    ngOnInit() {
      this.setCurrentAction();
      this.buildcommentForm();
      this.loadcomment();
      this.setPageName();
    }
    
    private buildcommentForm(){
      
      this.commentForm = new FormGroup({
        
        id: new FormControl(null),
        
        name: new FormControl('',[
          Validators.required, 
          Validators.minLength(5)
        ]),
        
        description: new FormControl('',[
          Validators.required, 
          Validators.minLength(5)
        ]),
        
        authorEmail:new FormControl('',[ 
          Validators.minLength(10)
        ]),
        
        created_at:new FormControl('',[ 
          Validators.minLength(10)
        ]),
        
        updated_at:new FormControl('',[ 
          Validators.minLength(10)
        ]),
        
        imageStorage: new FormControl('',[
          Validators.minLength(5)
        ])
        
        
      })
    }
    
    private setCurrentAction(){
      if(this.route.snapshot.url[0].path==='new') {
        
        this.currentAction= 'new';
        
      }
      else{ 
        this.currentAction= 'edit';
        
      }
    }
    
    
    private setPageName(){
      if(this.currentAction=='new'){
        this.pageName ="Novo Comentário"
        this.nameButton="Criar"
        this.isCreating =true
      }
      
      else{
        this.pageName= "Editar "
        this.isCreating =false;
        this.nameButton= "Editar"
      }
    }
    
    private createcomment(){
      const newcomment:CommentModel =
      Object.assign( new CommentModel(), this.commentForm.value)
      
      this.service.create(newcomment).subscribe(
        (c)=>{
          console.log(c)
          toastr.success(`Comentário criado`)
          this.submittingForm =false;
        })
        
      }
      
      private updatecomment(){
        const comment: CommentModel =
        Object.assign(new CommentModel(), this.commentForm.value)
        
        this.service.update(comment).subscribe(
          (c)=>{
            toastr.success(`Comentário atualizado!`)
            this.submittingForm =false;
          }
          )
          
        }
        
        submit(){
          this.submittingForm =true;
          
          if(this.currentAction === 'new'){
            this.createcomment()
          }
          
          else{ 
            this.updatecomment()
            
          }
        }
        
        private loadcomment(){
          if(this.currentAction==='edit'){
            this.route.paramMap.pipe(
              switchMap(
                params=> this.service.getCommentById(params.get('id'))
                )
                ).subscribe(
                  (comment)=>{
                    this.comment =comment;
                    this.commentForm.patchValue(comment);
                    
                  }
                  )
                  
                }
                
              }
            }
            