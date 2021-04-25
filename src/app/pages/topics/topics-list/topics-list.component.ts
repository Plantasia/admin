import { Component, OnInit } from '@angular/core';
import { TopicModel } from 'src/app/models/topic-model';

@Component({
  selector: 'app-topics-list',
  templateUrl: './topics-list.component.html',
  styleUrls: ['./topics-list.component.css']
})
export class TopicsListComponent implements OnInit {
  topics:TopicModel[];
  constructor() { }

  ngOnInit() {
  }

  getTopics(){
  
  }
}
