import { AuthService } from './../services/auth.service';
import { LoginComponent } from './../pages/login/login.component';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{
  hasPermission:boolean;
  
  constructor(
    private authService:AuthService,
    private router: Router
    ) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
     const token=  localStorage.getItem('access_token');
      
      if(token){
        return true
      }
      this.router.navigate['/login']
      return false;
    }
  }
  