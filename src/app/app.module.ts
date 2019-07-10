import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PostlistitemComponent } from './postlistitem/postlistitem.component';
import { NewPostComponent } from './new-post/new-post.component';
import { PostsService } from './services/posts.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostlistComponent,
    PostlistitemComponent,
    NewPostComponent
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
