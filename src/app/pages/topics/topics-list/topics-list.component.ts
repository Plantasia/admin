import { Component, OnInit } from '@angular/core';
import { TopicModel } from 'src/app/models/topic-model';
import { TopicsService } from 'src/app/services/topics.service';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css']
})
export class TopicsListComponent implements OnInit {
  topics:TopicModel[];
  baseUrl="http://localhost:3333/topics/admin/list"
  constructor(private service: TopicsService) { }
  
  
  ngOnInit() {
    this.getTopics();
    
  }
  
  getTopics(){
    this.service.getTopics().subscribe((topics)=>{
      this.topics = topics;
      console.log(this.topics)
    })
  }
}
