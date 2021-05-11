import { Observable } from 'rxjs';
import { TopicModel } from './../models/topic-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  urlAdminList = 'http://localhost:3333/topics/admin/list'
  baseUrl = 'http://localhost:3333/topics'
  constructor(private httpClient:HttpClient) { }

  getTopics():Observable<TopicModel[]>{
    return this.httpClient.get<TopicModel[]>(this.urlAdminList);
  }

  getTopicById(id:string):Observable<any>{
    return this.httpClient.get<TopicModel>(this.baseUrl+'/'+id)
  }

  public create(newTopic: TopicModel):Observable<TopicModel>{
    return this.httpClient.post<TopicModel>(
      this.baseUrl, newTopic
      );
  }

  public update(topic: TopicModel):Observable<TopicModel>{
    return this.httpClient.put<TopicModel>(
      this.baseUrl+'/'+topic.id,
      topic
      )
  }

}
