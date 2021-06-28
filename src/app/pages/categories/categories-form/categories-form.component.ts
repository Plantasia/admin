import { ActivatedRoute, Router } from '@angular/router';
import { CategoryModel } from './../../../models/category-model';
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CategoryService } from 'src/app/services/category.service';
import { catchError, switchMap } from 'rxjs/operators'
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
  currentAction: string;
  isCreating: boolean;
  categoryForm: FormGroup;
  pageName: string;
  errorMessages: string[] = null;
  submittingForm: boolean = false;
  nameButton: string;
  category: CategoryModel = new CategoryModel;

  constructor(
    private service: CategoryService,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
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

  private buildCategoryForm() {

    this.categoryForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),

      description: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),

      isActive: new FormControl(true, [

      ]),

      authorEmail: new FormControl('', [
        Validators.minLength(10)
      ]),

      created_at: new FormControl('', [
        Validators.minLength(10)
      ]),

      updated_at: new FormControl('', [
        Validators.minLength(10)
      ]),

      deleted_at: new FormControl('', [
        Validators.minLength(10)
      ]),

      imageStorage: new FormControl('', [])

    })
  }

  private setCurrentAction() {
    if (this.route.snapshot.url[0].path === 'new') {
      this.currentAction = 'new';

    }
    else {
      this.currentAction = 'edit';

    }
  }

  private setPageName() {
    if (this.currentAction == 'new') {
      this.pageName = "Nova Categoria"
      this.nameButton = "Criar"
      this.isCreating = true
    }
    else {
      this.pageName = "Editar Categoria";
      this.isCreating = false;
      this.nameButton = "Editar"
    }
  }

  private handleFileInput(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.categoryForm.get('imageStorage').patchValue({
        imageStorage: file
      }
      );
      const formData = new FormData();
      formData.append('file', file, file.name);
  
     this.service.imageUpload(formData, this.category.id).subscribe(
        (c) => {
          toastr.success(`Imagem ${file.name} atualizada com sucesso`)
         console.log(c)
         this.category.imageStorage = c.imageStorage;
         this.categoryForm.get('imageStorage').patchValue(c.imageStorage)
        }
      )

    }
  }

  private createCategory() {
    const newCategory: CategoryModel =
      Object.assign(new CategoryModel(), this.categoryForm.value)
      
    
    this.service.create(newCategory).subscribe(
      (c) => {
        console.log(c)
        toastr.success(`Categoria ${c.name} criada`)
        this.submittingForm = false;
      })

  }

  private updateCategory() {
    const category: CategoryModel =
      Object.assign(new CategoryModel(), this.categoryForm.value)
    category.id = this.category.id;
    this.service.update(category.id, category).subscribe(

      (c) => {
        toastr.success(`Categoria ${c.name} atualizada!`)
        this.submittingForm = false;
        console.log("categoria atualizada!")
        console.log(c);
      }
    )
  }

  private changeStatus(category: CategoryModel) {
    if (category.isActive) {
      this.category.deleted_at = new Date().toLocaleDateString();
      this.category.isActive = false;
    }

    else {
      this.category.isActive = true;
      this.category.deleted_at = null;
    }

    this.categoryForm.patchValue(this.category);
    this.categoryForm.get('isActive').setValue( this.category.isActive )
    this.categoryForm.get('deleted_at').setValue(this.category.deleted_at)
   
    console.log("categoryForm")
    console.log(this.categoryForm.value)

  }

  submit() {
    this.submittingForm = true;

    if (this.currentAction === 'new') {
      this.createCategory()
    }

    else {
      this.updateCategory()

    }
  }

  private loadCategory() {
    if (this.currentAction === 'edit') {
      this.route.paramMap.pipe(
        switchMap(
          params => this.service.getCategoryById(params.get('id'))
        )
      ).subscribe(
        (category) => {
          this.category = category;
          this.categoryForm.patchValue(category);
          console.log(category);
        }
      )

    }


  }
}