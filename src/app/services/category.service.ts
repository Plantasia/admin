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
  baseURLPost ='http://localhost:3333/forum/categories/'
  


  public getCategories():Observable<CategoryModel[]>{
   return this.httpClient.get<CategoryModel[]>(this.baseURL);
  }
 
   public  getCategoryById(id:string):Observable<CategoryModel>{
    var resp = this.httpClient.get<CategoryModel>(this.baseURL+'/'+id);
    return resp;
  }

  public create(newCategory: CategoryModel):Observable<CategoryModel>{
    return this.httpClient.post<CategoryModel>(
      this.baseURLPost, newCategory
      );
  }

  public update(category: CategoryModel):Observable<CategoryModel>{
    return this.httpClient.patch<CategoryModel>(
      this.baseURLPost+category.getId(),
      category
      )
  }


}
