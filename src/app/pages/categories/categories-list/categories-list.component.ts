import { CategoryModel } from './../../../models/category-model';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit {

  pageName="Categorias"
  categories: CategoryModel[];
  constructor(private service:CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(){
    this.service.getCategories().subscribe((categories)=>{
      this.categories=categories;
      console.table(categories);
    })
  }

}
