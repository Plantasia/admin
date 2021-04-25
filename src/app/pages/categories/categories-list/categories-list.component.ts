import { CategoryModel } from './../../../models/category-model';
import { CategoryService } from './../../../services/category.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
declare var $;
@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
})
export class CategoriesListComponent implements OnInit, AfterViewInit {

  
  //@ViewChild('dataTable',{static:false}) table;
  //datatable:any;
  pageName="Categorias";
  categories: CategoryModel[];
  dtOptions: DataTables.Settings = {};
  constructor(private service:CategoryService) { }

  ngAfterViewInit(): void {
    //this.datatable =$(this.table.nativeElement);
    //this.datatable.DataTable();
    
  }

  ngOnInit() {
    this.getCategories();
    this.dtOptions = {
      pagingType: 'full_numbers'
    };
  }

  getCategories(){
    this.service.getCategories().subscribe((categories)=>{
      this.categories=categories;
      console.table(categories);
    })
  }

}
