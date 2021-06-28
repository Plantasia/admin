import { SharedModule } from './../../shared/shared-module/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { TopicsListComponent } from './topics-list/topics-list.component';
import { TopicsFormComponent } from './topics-form/topics-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicsRoutingModule } from './topics-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TopicsFormComponent,TopicsListComponent],
  imports: [
    CommonModule,
    TopicsRoutingModule,
    SharedModule

  ]
})
export class TopicsModule { }
