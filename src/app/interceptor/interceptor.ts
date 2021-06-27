import { catchError, tap } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import toastr from 'toastr';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor{
  
  constructor(
    private route: Router) { }
  
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {
      
      
      const access_token = localStorage.getItem("access_token");
      if(access_token){
        const tokenizedReq = req.clone({
          setHeaders: {
            Authorization: "Bearer "+access_token
          }
          
        });
        
        return next.handle(tokenizedReq)
        .pipe(
            catchError(err => {
              if (err instanceof HttpErrorResponse) {
                console.log(err)
                if (err.status === 401) {
                  toastr.warning("Seu token expirou, faça login novamente!  :401 UNAUTORIZED   "
                    + err.statusText)
                  this.route.navigate(["/login"])
                  return;
                }
                if (err.status === 404) {
                  toastr.warning("Recurso não encontrado:  404 NOT FOUND"
                    + err.statusText)
                  return;
                }
                
                if (err.status === 500) {
                  toastr.error("Erro no servidor:  500 INTERNAL SERVER ERROR")
                  return;
                }
                
                else toastr.warning("Erro de conexão com o servidor :   "+err.statusText);
                
              }
              
              return new Observable<HttpEvent<any>>();   
              
            }));
            
          }
          
          return next.handle(req);
        }
      }
      