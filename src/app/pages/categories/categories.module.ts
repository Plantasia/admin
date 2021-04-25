import { HttpClientModule } from '@angular/common/http';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { CategoriesRoutingModule } from './categories-routing.module';

@NgModule({
  declarations: [CategoriesFormComponent,CategoriesListComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    HttpClientModule
  ]
})
export class CategoriesModule { }
