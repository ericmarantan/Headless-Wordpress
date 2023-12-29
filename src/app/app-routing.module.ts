import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './single-post/single-post.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: 'blog', component: PostComponent },
  { path: 'blog/:id', component: SinglePostComponent},
  { path: '**', redirectTo: 'blog', pathMatch: 'full'},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
