import { MatIconModule } from '@angular/material/icon';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsFormComponent } from './comments-form/comments-form.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from 'src/app/shared/shared-module/shared.module';



@NgModule({
  declarations: [CommentsFormComponent,CommentsListComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    SharedModule
    
  ]
})
export class CommentsModule { }
