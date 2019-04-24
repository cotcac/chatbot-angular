import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path:'chat', loadChildren:'./modules/chat/chat.module#ChatModule'},
  {path:'feedback', loadChildren:'./modules/feedback/feedback.module#FeedbackModule'},
  {path:'responses', loadChildren:'./modules/responses/responses.module#ResponsesModule'},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
