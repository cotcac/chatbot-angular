import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback/feedback.component';
import { Routes, RouterModule } from '@angular/router';
import { FeedbackItemComponent } from './feedback-item/feedback-item.component';

const routes: Routes = [
  {path: '', component:FeedbackComponent},

];

@NgModule({
  declarations: [FeedbackComponent, FeedbackItemComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class FeedbackModule { }
