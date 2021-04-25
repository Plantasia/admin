import { CategoryModel } from './../models/category-model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {}
  baseURL = 'http://localhost:3333/forum/categories/admin';


  public getCategories():Observable<CategoryModel[]>{
   return this.httpClient.get<CategoryModel[]>(this.baseURL);
  }



}
