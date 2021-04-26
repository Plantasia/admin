import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    MatIconModule
    
  ],
  exports:[
    HttpClientModule,
    MatIconModule]
})
export class SharedModule { }
