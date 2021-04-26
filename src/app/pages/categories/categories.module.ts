import { SharedModule } from './../../shared/shared-module/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoriesFormComponent } from './categories-form/categories-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTablesModule} from 'angular-datatables'
import {MatIconModule} from '@angular/material/icon'
import { CategoriesRoutingModule } from './categories-routing.module';


@NgModule({
  declarations: [CategoriesFormComponent,CategoriesListComponent],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    SharedModule
  
  ]
})
export class CategoriesModule { }
