import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main.component';
import { BlogPostsComponent } from './blog-posts/blog-posts.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'comments',
        component: CommentsComponent
      },
      {
        path: 'blog-posts',
        component: BlogPostsComponent
      },
      {
        path: 'category',
        loadChildren: () => import('./category/category.module').then(mod => mod.CategoryModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
