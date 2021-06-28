import { JwtModel } from './../../models/jwt-model';
import { catchError } from 'rxjs/operators';
import { AdminModel } from './../../models/admin-model';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import toastr from 'toastr';
import { HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  isLogged:boolean =false;
  pageName:string;
  errorMessages: string[]= null;
  submittingForm:boolean =false;
  nameButton:string = "login";
  
  constructor(private authService:AuthService,
    private adminData:AdminModel,
    private route: ActivatedRoute,
    private router: Router,
    
    ) {}
    
  ngOnInit(): void {
    this.authService.adminLogout().subscribe(() => {
       localStorage.removeItem("access_token");
      })
      this.buildLoginForm()
    }
    
    private submit(){
      
      const password:string = this.loginForm.get('password').value;
      const username:string = this.loginForm.get('username').value;

      this.adminData.setEmail(username)
      this.adminData.setPassword(password);
      
      this.authService.adminSignIn(this.adminData);
      
    }
    private buildLoginForm(){
      this.loginForm = new FormGroup({
        username: new FormControl(
          '',[
            Validators.required,
            Validators.minLength(6)
          ]
          ),
          password: new FormControl(
            '',[
              Validators.required,
              Validators.minLength(10)  
            ]
            )
          })
        }
        
        private actionsForSuccess(){
          toastr.success("Logando você no Plantasia Admin");
          this.submittingForm = true;
          
          
        }
        
        private actionsForError(error:HttpErrorResponse){
          toastr.error(error.message);
          toastr.error("Ocorreu um erro!" );
          this.submittingForm =false;
          
        }
      }
      