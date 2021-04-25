import { CommentsModule } from './pages/comments/comments.module';
import { TopicsModule } from './pages/topics/topics.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { UsersModule } from './pages/users/users.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes } from '@angular/router';
import { CategoriesListComponent } from './pages/categories/categories-list/categories-list.component';
import { CategoriesFormComponent } from './pages/categories/categories-form/categories-form.component';
import { UsersFormComponent } from './pages/users/users-form/users-form.component';
import { UsersListComponent } from './pages/users/users-list/users-list.component';
import { CommentsListComponent } from './pages/comments/comments-list/comments-list.component';
import { CommentsFormComponent } from './pages/comments/comments-form/comments-form.component';
import { TopicsFormComponent } from './pages/topics/topics-form/topics-form.component';
import { TopicsListComponent } from './pages/topics/topics-list/topics-list.component';
import { NavbarComponent } from './template/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    CategoriesModule,
    TopicsModule,
    CommentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
