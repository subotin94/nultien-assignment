import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPostsComponent } from '../blog-posts/blog-posts.component';
import { CategoryComponent } from './category.component';

const routes: Routes = [
  {
    path: ':id',
    component: CategoryComponent,
    children: [
      {
        path: 'blog-posts',
        component: BlogPostsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
