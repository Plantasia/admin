import { SharedModule } from 'src/app/shared/shared-module/shared.module';
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
import { CoreModule } from './core/core/core.module';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    CoreModule,
    SharedModule,
    AppRoutingModule,
    UsersModule,
    CategoriesModule,
    TopicsModule,
    CommentsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
