import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component';
import { ReadComponent } from './components/read/read.component';
import { PostWriteComponent } from './components/post-write/post-write.component';
import { ResponsesComponent } from './components/responses/responses.component';
import { ResponseCreateComponent } from './components/response-create/response-create.component';
import { InsertKeywordComponent } from './components/insert-keyword/insert-keyword.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'responses', component:ResponsesComponent},
  {path: 'responses/create/:id', component:ResponseCreateComponent},
  {path: 'response/keyword/:id', component:InsertKeywordComponent},
  {path: 'posts', component:PostsComponent},
  {path:'post-write/:id', component:PostWriteComponent },
  {path: 'posts/:id', component:PostsComponent},
  {path: 'read/:id', component:ReadComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
