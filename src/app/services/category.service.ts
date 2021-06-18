import { CategoryModel } from './../models/category-model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) {}
  baseAdmin = 'http://localhost:3333/forum/categories/admin/list';
  baseURL = 'http://localhost:3333/forum/categories/'
  baseUpload = 'http://localhost:3333/forum/categories/image/'
  


  public getCategories():Observable<CategoryModel[]>{
   return this.httpClient.get<CategoryModel[]>(this.baseAdmin);
  }
 
   public  getCategoryById(id:string):Observable<CategoryModel>{
    var resp = this.httpClient.get<CategoryModel>(this.baseURL+'admin/'+id);
    return resp;
  }

  public create(newCategory: CategoryModel):Observable<CategoryModel>{
    return this.httpClient.post<CategoryModel>(
      this.baseURL, newCategory
      );
  }

  public imageUpload(formData: FormData, id: string) {
    console.log("entrei aqui")
    console.log(formData)
    return this.httpClient.post<any>(
      this.baseUpload + id, formData, { headers: new HttpHeaders({ 'Content-Type': 'undefined' })  },
    
    )
  }

  public update(id, data: CategoryModel): Observable<CategoryModel>{
    
    return this.httpClient.patch<any>(
      this.baseURL+id,
      data
      )
  }


}
