import { Observable } from 'rxjs';
import { TopicModel } from './../models/topic-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopicsService {

  urlAdminList = 'http://localhost:3333/forum/topics/admin/list'
  baseUrl = 'http://localhost:3333/forum/topics'
  constructor(private httpClient:HttpClient) { }

  getTopics():Observable<TopicModel[]>{
    return this.httpClient.get<TopicModel[]>(this.urlAdminList);
  }

  getTopicById(id:string):Observable<any>{
    return this.httpClient.get<TopicModel>(this.baseUrl+'/'+id+'/admin')
  }

  public create(newTopic: TopicModel):Observable<TopicModel>{
    return this.httpClient.post<TopicModel>(
      this.baseUrl, newTopic
      );
  }

  public update(topic: TopicModel):Observable<TopicModel>{
    return this.httpClient.patch<TopicModel>(
      this.baseUrl+'/'+topic.id+"/admin",
      topic
      )
  }

}
