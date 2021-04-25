import { TopicModel } from './../models/topic-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  baseUrl = 'http://localhost:3333/topics/admin/list'
  constructor(private httpClient:HttpClient) { }

  getTopics(){
    return this.httpClient.get<TopicModel[]>(this.baseUrl);
  }
}
