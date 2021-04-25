import { TopicsListComponent } from './topics-list/topics-list.component';
import { TopicsFormComponent } from './topics-form/topics-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TopicsRoutingModule } from './topics-routing.module';

@NgModule({
  declarations: [TopicsFormComponent,TopicsListComponent],
  imports: [
    CommonModule,
    TopicsRoutingModule
  ]
})
export class TopicsModule { }
