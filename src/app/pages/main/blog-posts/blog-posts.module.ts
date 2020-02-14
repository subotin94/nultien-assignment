import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbWindowModule } from '@nebular/theme';
import { BlogPostsComponent } from './blog-posts.component';

@NgModule({
  declarations: [
    BlogPostsComponent
  ],
  imports: [
    CommonModule,
    NbButtonModule,
    NbWindowModule.forRoot()
  ],
  exports: [
    BlogPostsComponent
  ]
})
export class BlogPostsModule { }
