
import { Interceptor } from './../../interceptor/interceptor';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/template/navbar/navbar.component';
import { HeaderComponent } from 'src/app/template/header/header.component';
import { InterceptorModule } from 'src/app/interceptor/interceptor.module';
import { AuthService } from 'src/app/services/auth.service';



@NgModule({
  declarations: [ 
    NavbarComponent,
    HeaderComponent,],
  imports: [
    HttpClientModule,
    MatIconModule,
    FormsModule,
   
    
    
  ],
  exports:[
    HttpClientModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NavbarComponent,
    HeaderComponent],
    providers:[AuthService]
})
export class SharedModule { }
