import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostsComponent } from './blog-posts.component';

@NgModule({
  declarations: [
    BlogPostsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BlogPostsComponent
  ]
})
export class BlogPostsModule { }
