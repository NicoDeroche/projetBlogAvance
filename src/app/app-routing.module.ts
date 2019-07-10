import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostlistComponent } from './postlist/postlist.component';
import { NewPostComponent } from './new-post/new-post.component';


const routes: Routes = [

  { path: 'new',  component: NewPostComponent },
  { path: 'posts',  component: PostlistComponent },
  { path: '', redirectTo: 'posts', pathMatch: 'full' },
  { path: '**', redirectTo: 'posts' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 



}
