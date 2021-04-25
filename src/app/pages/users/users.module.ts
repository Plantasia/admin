import { MatIconModule } from '@angular/material/icon';
import { UsersFormComponent } from './users-form/users-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [UsersListComponent,UsersFormComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    HttpClientModule,
    MatIconModule
  ]
})
export class UsersModule { }
