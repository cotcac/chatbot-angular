import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ResponsesComponent } from './components/responses/responses.component';
import { ResponseCreateComponent } from './components/response-create/response-create.component';
import { InsertKeywordComponent } from './components/insert-keyword/insert-keyword.component';
import { ChatComponent } from './components/chat/chat.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'responses', component:ResponsesComponent},
  {path: 'responses/create/:id', component:ResponseCreateComponent},
  {path: 'response/keyword/:id', component:InsertKeywordComponent},
  {path: 'chat', component:ChatComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
