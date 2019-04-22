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
import { QuillModule } from 'ngx-quill';
import { AboutComponent } from './components/about/about.component';
import { AnnouncementComponent } from './components/announcement/announcement.component';
import { ResponsesComponent } from './components/responses/responses.component';
import { ResponseCreateComponent } from './components/response-create/response-create.component';
import { ResponseItemComponent } from './components/response-item/response-item.component';
import { InsertKeywordComponent } from './components/insert-keyword/insert-keyword.component';
import { ChatComponent } from './components/chat/chat.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    AnnouncementComponent,
    ResponsesComponent,
    ResponseCreateComponent,
    ResponseItemComponent,
    InsertKeywordComponent,
    ChatComponent,
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
