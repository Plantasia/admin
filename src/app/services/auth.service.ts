import { ActivatedRoute, Router } from '@angular/router';
import { JwtModel } from './../models/jwt-model';
import { AdminModel } from './../models/admin-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import toastr from 'toastr';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private urlSignIn = "http://localhost:3333/signin/admin"
  private urlLogout = "http://localhost:3333/logout"
  public hasAToken:string;
  
  
  constructor( 
    private httpClient:HttpClient,
    private route: ActivatedRoute,
    private router: Router) { }
    
    public adminSignIn(adminData:AdminModel){
      const email = adminData.getEmail();
      const password  = adminData.getPassword();
      
      this.hasAToken = localStorage.getItem("access_token")
      this.httpClient.post<any>(this.urlSignIn,{email,password})
      .toPromise().then(
        jwt=>{
          console.log(jwt.access_token)
          localStorage.setItem("access_token", jwt.access_token)
          this.router.navigate(['/']) 
          return this.hasAToken = localStorage.getItem("access_token")

        }
      ).catch(error=>{
        toastr.console.error("Não logado!"+error.message);
        
      })
    }

    public isLogged():boolean{
      
      console.log(this.hasAToken)
      if(this.hasAToken){
        return true
      }

      else return false;
    }
    
    public adminSignUp():Observable<void>{
      return this.httpClient.get<void>(this.urlLogout)
    }
    
  }
  