import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsesComponent } from './responses/responses.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/admin.guard';
import { ResponseItemComponent } from './response-item/response-item.component';
import { ResponseCreateComponent } from './response-create/response-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertKeywordComponent } from './insert-keyword/insert-keyword.component';
const routes: Routes = [
  {
    path: '',
    canActivate:[AdminGuard],
    children: [
      {path:'', component:ResponsesComponent},
      {path:'create/:id', component:ResponseCreateComponent},
      {path:'keyword/:id', component:InsertKeywordComponent}
    ]
  },

];
@NgModule({
  declarations: [ResponsesComponent, ResponseItemComponent, ResponseCreateComponent, InsertKeywordComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ResponsesModule { }
