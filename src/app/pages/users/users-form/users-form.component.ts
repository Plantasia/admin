import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'jquery';
import { catchError, switchMap } from 'rxjs/operators';
import { UserModel } from 'src/app/models/user-model';
import { UsersService } from 'src/app/services/users.service';
import toastr from 'toastr';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.css']
})
export class UsersFormComponent implements OnInit {
  handleError;
  currentAction: string;
  pageName: string;
  isCreating: boolean = false;
  userForm: FormGroup;
  submittingForm: boolean = false;
  nameButton: string;
  errorMessages: string[];
  user: UserModel = new UserModel();

  constructor(
    private service: UsersService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.setCurrentAction();
    this.builduserForm();
    this.loadUser();
  }

  private setCurrentAction() {
    if (this.route.snapshot.url[0].path === 'new') {
      this.currentAction = 'new';
      this.nameButton = "Criar"
      this.pageName = "Criar Usuário"
      this.isCreating = true
    }
    else {
      this.currentAction = 'edit'
      this.nameButton = "Editar"
      this.pageName = " Editar Usuário"
      this.isCreating = false
    }

  }


  private submit() {
    this.submittingForm = true;

    if (this.currentAction === 'edit') {
      this.updateUser()
    }
  }

  private builduserForm() {

    this.userForm = new FormGroup({

      id: new FormControl(null),

      bio: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),

      name: new FormControl('', [
        Validators.required,
        Validators.minLength(10)
      ]),

      isAdmin: new FormControl('', [
      ]),

      avatar: new FormControl('', [
        Validators.minLength(10)
      ]),

      created_at: new FormControl('', [
        Validators.required,
      ]),

      updated_at: new FormControl('', [
        Validators.required,
      ]),

      deleted_at: new FormControl('', [
        Validators.required,
      ])

    })

  }

  private changeAdminStatus(user: UserModel) {
    if (user.isAdmin) user.isAdmin = false;
    else user.isAdmin = true;
    this.userForm.get('isAdmin').setValue(user.isAdmin)
    console.log(this.userForm.value)
  }

  private changeIsActiveStatus(user: UserModel) {
    if (user.deleted_at == null) user.deleted_at = new Date().toISOString();
    else user.deleted_at = null;
    this.userForm.get('deleted_at').setValue(user.deleted_at)
    console.log(this.userForm.value)
  }

  private updateUser() {

    const user: UserModel =
      Object.assign(new UserModel(), this.userForm.value)
    console.log("user a ser gravado")
    console.log(user);
    this.service.update(user.id, user).subscribe(
      (t) => {
        toastr.success(`Usuário ${user.name} editado!`)
        this.submittingForm = false;
      }

    )

  }

  private handleFileInput(event) {
    if (event.target.files.length > 0) {
      const file: File = event.target.files[0];
      this.userForm.get('avatar').patchValue({
        avatar: file
      });

      const formData = new FormData();
      formData.append('file', file, file.name);

      this.service.imageUpload(formData, this.user.id)
        .subscribe(
        (c) => {
          console.log(c)
          toastr.success("Imagem atualizada com sucesso")
    
        }
      )

    }
  }

  private loadUser() {
    const id = this.route.snapshot.url[0].path
    if (this.currentAction === "edit") {

      this.route.paramMap.pipe(
        switchMap(
          params => this.service.getUserById(params.get('id'))
        )
      ).subscribe(
        (user) => {
          this.user = user
          this.userForm.patchValue(user)
          console.log(user);
          this.user.avatar = user.avatarUrl
        }

      )

    }
  }


}
