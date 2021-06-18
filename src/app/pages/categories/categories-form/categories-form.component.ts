import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from './../../../models/category-model';
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { catchError, switchMap} from 'rxjs/operators'
import toastr from 'toastr';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import { ThisReceiver } from '@angular/compiler';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-categories-form',
  templateUrl: './categories-form.component.html',
  styleUrls: ['./categories-form.component.css']
})
export class CategoriesFormComponent implements OnInit, AfterViewInit {
  currentAction:string;
  isCreating:boolean;
  categoryForm:FormGroup;
  pageName:string;
  errorMessages: string[]= null;
  submittingForm:boolean =false;
  nameButton:string;
  category:CategoryModel = new CategoryModel;

  constructor(
    private service:CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder:FormBuilder,
    private cdRef: ChangeDetectorRef   

    ) { }
  ngAfterViewInit(): void {
    
  }

  ngOnInit() {
    this.setCurrentAction();
    this.buildCategoryForm();
    this.loadCategory();
    this.setPageName();
  }

  private buildCategoryForm(){

    this.categoryForm = new FormGroup({

      id: new FormControl({
        value: null
      }),

       name: new FormControl('',[
        Validators.required, 
        Validators.minLength(5)
      ]),
  
       description: new FormControl('',[
        Validators.required, 
        Validators.minLength(5)
       ]),
       
      isActive: new FormControl(false, [
        
      ]),
  
       authorEmail:new FormControl('',[ 
        Validators.minLength(10)
      ]),
  
       created_at:new FormControl('',[ 
        Validators.minLength(10)
      ]),
  
       updated_at:new FormControl('',[ 
        Validators.minLength(10)
      ]),
  
       imageStorage: new FormControl('',[])
       
    })
  }

  private setCurrentAction(){
    if(this.route.snapshot.url[0].path === 'new') {
    //[0] is to catch the 'new'
      this.currentAction= 'new';
      
    }
    else{ 
      this.currentAction= 'edit';
     
    }
  }

  private setPageName(){
    if(this.currentAction=='new'){
      this.pageName ="Nova Categoria"
      this.nameButton="Criar"
      this.isCreating =true
    }
    else{
      this.pageName = "Editar Categoria";
      this.isCreating =false;
      this.nameButton= "Editar"
    }
  }
 
  private handleFileInput(event) {
    if (event.target.files.length > 0) {
      const file:File = event.target.files[0];
      this.categoryForm.get('imageStorage').patchValue({
        imageStorage:file
        }
      );

      const formData = new FormData();
        
      formData.append('file', file, file.name);
      console.log("file")
      console.log(file)

      console.log("antes")
      console.log(formData)
      this.service.imageUpload(formData, this.category.id).subscribe(
        (c) => {
          console.log("upload")
          console.log(c)
        }
      )
     
    }
  }

private createCategory(){
  const newCategory:CategoryModel =
  Object.assign( new CategoryModel(), this.categoryForm.value)

  this.service.create(newCategory).subscribe(
    (c)=>{
      console.log(c)
      toastr.success(`Categoria ${c.name} criada`)
      this.submittingForm =false;
    })
    
}

private updateCategory(){
    const category: CategoryModel =
      Object.assign(new CategoryModel(), this.categoryForm.value)

  this.service.update(category.id, category).subscribe(
    
      (c)=>{
        toastr.success(`Categoria ${c.name} atualizada!`)
        this.submittingForm =false;
    }
    )
}

 submit(){
   this.submittingForm =true;

   if(this.currentAction === 'new'){
     this.createCategory()
   }

   else{ 
     this.updateCategory()
    
   }
 }

  private loadCategory(){
    if(this.currentAction==='edit'){
      this.route.paramMap.pipe(
        switchMap(
          params=> this.service.getCategoryById(params.get('id'))
        )
      ).subscribe(
        (category)=>{
          this.category =category;
          this.categoryForm.patchValue(category);
          console.log(category);
        }
      )
    
  }

  
  }
}