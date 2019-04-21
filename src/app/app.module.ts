import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostsItemComponent } from './components/posts-item/posts-item.component';
import { ReadComponent } from './components/read/read.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostWriteComponent } from './components/post-write/post-write.component';
import { QuillModule } from 'ngx-quill';
import { AboutComponent } from './components/about/about.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { ResponsesComponent } from './components/responses/responses.component';
import { ResponseCreateComponent } from './components/response-create/response-create.component';
import { ResponseItemComponent } from './components/response-item/response-item.component';
import { InsertKeywordComponent } from './components/insert-keyword/insert-keyword.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    PostsComponent,

    PostsItemComponent,
    ReadComponent,
    PostDetailComponent,
    PostWriteComponent,
    AboutComponent,
    AnnouncementComponent,
    SearchFormComponent,
    ResponsesComponent,
    ResponseCreateComponent,
    ResponseItemComponent,
    InsertKeywordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    QuillModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
