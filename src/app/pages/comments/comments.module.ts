import { CommentsListComponent } from './comments-list/comments-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsFormComponent } from './comments-form/comments-form.component';


@NgModule({
  declarations: [CommentsFormComponent,CommentsListComponent],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ]
})
export class CommentsModule { }
