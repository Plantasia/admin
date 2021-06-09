import { ActivatedRoute, Router } from '@angular/router';
import { TopicsService } from 'src/app/services/topics.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TopicModel } from 'src/app/models/topic-model';
import toastr from 'toastr';
import { catchError, switchMap} from 'rxjs/operators'
import { pipe } from 'rxjs';

@Component({
  selector: 'app-topics-form',
  templateUrl: './topics-form.component.html',
  styleUrls: ['./topics-form.component.css']
})
export class TopicsFormComponent implements OnInit {
  currentAction:string;
  pageName:string;
  isCreating:boolean = false;
  topicForm:FormGroup;
  submittingForm:boolean=false;
  nameButton:string;
  errorMessages:string[];
  topic:TopicModel = new TopicModel();

  constructor(
    private service:TopicsService,
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.setCurrentAction();
    this.buildTopicForm();
    this.loadTopic();
  }

  private setCurrentAction(){
    if(this.route.snapshot.url[0].path ==='new'){
      this.currentAction='new';
      this.nameButton = "Criar"
      this.pageName ="Criar Tópico"
      this.isCreating = true
    }
    else{
      this.currentAction ='edit'
      this.nameButton="Editar"
      this.pageName =" Editar Tópico"
      this.isCreating = false
    }

  }


  private submit(){
    this.submittingForm =true;

    if(this.currentAction === 'new'){
      this.createTopic();
      
    }
 
    else{ 
      this.updateTopic()
     
    }
  }

  private buildTopicForm(){

    this.topicForm = new FormGroup({

      id: new FormControl(null),

      name: new FormControl('',[
        Validators.required,
        Validators.minLength(10)
      ]),

      textBody: new FormControl('',[
        Validators.required,
        Validators.minLength(10)
      ]),

      isActive: new FormControl('',[
      ]),

      imageStorage: new FormControl('',[
        Validators.minLength(10)
      ]),

      created_at: new FormControl('',[]),

      updated_at: new FormControl('',[]),

       deleted_at: new FormControl('', [])
      
    })

  }

  private createTopic(){
    const topic = Object.assign( new TopicModel(), 
    this.topicForm.value)

    this.service.create(topic).subscribe(
      (t)=>{
        console.log(t)
        toastr.success(`Topic ${t.name} criado!`)
        this.submittingForm =false;
      })
  }

  private updateTopic(){

    const topic: TopicModel =
    Object.assign(new TopicModel(), this.topicForm.value)
    console.log(topic);
    this.service.update(topic).subscribe(
      (t)=>{
        toastr.success(`Tópico atualizado!`)
        this.submittingForm =false;
      }
      
    )

  }

  private loadTopic(){
    const id = this.route.snapshot.url[0].path
     if(this.currentAction === "edit"){

      this.route.paramMap.pipe(
        switchMap(
          params =>this.service.getTopicById(params.get('id'))
        )
      ).subscribe(
        (topic)=>{
          this.topic=topic
          this.topicForm.patchValue(topic)
        }
      )
     }
  }

}
