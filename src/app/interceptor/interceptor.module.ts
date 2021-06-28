import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor } from './interceptor';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    Interceptor,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi:true
    }

  ]
})
export class InterceptorModule { }
