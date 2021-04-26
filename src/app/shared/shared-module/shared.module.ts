import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    MatIconModule,
    FormsModule,
    
    
  ],
  exports:[
    HttpClientModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule]
})
export class SharedModule { }
