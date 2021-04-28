import { catchError, tap } from 'rxjs/operators';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import toastr from 'toastr';

@Injectable({
  providedIn: 'root'
})
export class Interceptor implements HttpInterceptor{
  
  constructor() { }
  
  intercept(req: HttpRequest<any>, 
    next: HttpHandler): Observable<HttpEvent<any>> {
      
      
      const access_token = localStorage.getItem("access_token");
      if(access_token){
        //headers: req.headers.set('Authorization', 'Bearer '+access_token)
        const tokenizedReq = req.clone({
          setHeaders: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: "Bearer "+access_token
          }
          
        });
        
        return next.handle(tokenizedReq)
        .pipe(
          /*tap((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse && event.status === 201) {
              toastr.success("Operação realizada com sucesso!");
            }
          }),*/
            catchError(err => {
              if (err instanceof HttpErrorResponse) {
                console.log(err)
                if (err.status === 401) {
                  toastr.warning("Sem autorização"
                  +err.statusText)
                }
                if (err.status === 404) {
                  toastr.warning("Recurso solicitado não existe =>"
                  +err.statusText)
                }
                
                if (err.status === 500) {
                  toastr.error();
                  ("Erro interno  :  "
                  +err.statusText)
                }
                
                else toastr.warning("Erro de conexão com o servidor : "+err.statusText);
                
              }
              
              return new Observable<HttpEvent<any>>();   
              
            }));
            
          }
          
          return next.handle(req);
        }
      }
      