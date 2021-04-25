import { CommentsModule } from './pages/comments/comments.module';
import { TopicsModule } from './pages/topics/topics.module';
import { CategoriesModule } from './pages/categories/categories.module';
import { UsersModule } from './pages/users/users.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    CommentsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
