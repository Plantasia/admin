import { ActivatedRoute, Router } from '@angular/router';
import { TopicsService } from 'src/app/services/topics.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TopicModel } from 'src/app/models/topic-model';

@Component({
  selector: 'app-topics-form',
  templateUrl: './topics-form.component.html',
  styleUrls: ['./topics-form.component.css']
})
export class TopicsFormComponent implements OnInit {
  currentAction:string;
  topicForm:FormGroup;
  submittingForm:boolean=false;
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
    }
    else{
      this.currentAction ='edit'
    }

  }

  private buildTopicForm(){

  }

  private loadTopic(){
    
  }

}
