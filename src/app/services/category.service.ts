import { CategoryModel } from './../models/category-model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private httpClient: HttpClient,
    private headers: HttpHeaders) {
    
    const access_token = localStorage.getItem("access_token");
    headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Bearer ', `${access_token}`);
    
     }
  baseAdmin = 'http://localhost:3333/forum/categories/admin/list';
  baseURL = 'http://localhost:3333/forum/categories/'
  imgUpload = "http://localhost:3333/forum/categories/image/"
  



  public getCategories(): Observable<CategoryModel[]> {
    return this.httpClient.get<CategoryModel[]>(this.baseAdmin,
      { headers: this.headers });
  }

  public getCategoryById(id: string): Observable<CategoryModel> {
    var resp = this.httpClient.get<CategoryModel>(this.baseURL + 'admin/' + id,
      { headers: this.headers });
    return resp;
  }

  public create(newCategory: CategoryModel): Observable<CategoryModel> {
    return this.httpClient.post<CategoryModel>(
      this.baseURL, newCategory,
      { headers: this.headers }
    );
  }

  public update(id, data): Observable<any> {
  
     

    return this.httpClient.patch<any>(
      this.baseURL + id,
      data, { headers: this.headers }
              )
  }


  public imageUpload(categoryId: string, formData: FormData): Observable<any> {
    console.log("upload!")

    return this.httpClient.patch<any>(
      this.imgUpload + categoryId,
      formData, {
      reportProgress: true,
      responseType: 'json'
    }
    )
  }
}
