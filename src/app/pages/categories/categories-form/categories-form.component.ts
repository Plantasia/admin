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

       name: new FormControl('',[
        Validators.required, 
        Validators.minLength(5)
      ]),
  
       description: new FormControl('',[
        Validators.required, 
        Validators.minLength(5)
      ]),
  
       authorEmail:new FormControl('',[ 
        Validators.minLength(10)
      ]),
  
       createdAt:new FormControl('',[ 
        Validators.minLength(10)
      ]),
  
       updatedAt:new FormControl('',[ 
        Validators.minLength(10)
      ]),
  
       url: new FormControl('',[
       Validators.minLength(5)
      ])
  

    })
  }

  private setCurrentAction(){
    if(this.route.snapshot.url[0].path==='new') {
    //[0] is to catch the 'new'
      this.currentAction= 'new';
      
    }
    else{ 
      this.currentAction= 'edit';
     
    }
  }

  private convertCategoryDates(){
     let createdAt = this.category.getCreated_at();
     let deletedAt = this.category.getDeleted_at();
     let updatedAt = this.category.getUpdated_at()
  }

  private setPageName(){
    if(this.currentAction=='new'){
      this.pageName ="Nova Categoria"
      this.nameButton="Criar"
      this.isCreating =true
    }
    else{
      const categoryName = this.category.getName() || ""
      this.pageName= "Editar "+ categoryName;
      this.isCreating =false;
      this.nameButton= "Editar"
    }
  }

private createCategory(){
  const newCategory:CategoryModel =
  Object.assign( new CategoryModel(), this.categoryForm.value)

  this.service.create(newCategory).pipe(
    catchError(error=> {
      this.actionsForError(error)
      return throwError(error)
    }
  ))
  .subscribe(categoryCreated=>{ 
    this.actionsForSuccess(categoryCreated)
  })
    
}

private updateCategory(){
    const category: CategoryModel =
    Object.assign(new CategoryModel(), this.categoryForm.value)

    this.service.update(category).pipe(
      catchError(error=>{
        this.actionsForError(error);
        return throwError(error);
      })
    ).subscribe((updatedCategory)=>{
      this.actionsForSuccess(updatedCategory);

    })
}

 submit(){
   this.submittingForm =true;

   if(this.currentAction === 'new'){
     this.createCategory();
   }

   else{ 
     console.log("UPDATE")
     this.updateCategory()
    
   }
 }

 private actionsForSuccess(category:CategoryModel){
   toastr.success("Categoria criada com sucesso!")
   this.router.navigateByUrl('categories',{skipLocationChange:true})

 }

 private actionsForError(error:HttpErrorResponse){
  toastr.error(error.message);
  toastr.error("Ocorreu um erro!" );
  
  this.submittingForm =false;
  
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
        
        }
      )
    
  }

  
  }
}