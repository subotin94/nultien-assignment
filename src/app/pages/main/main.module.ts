import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { BlogPostProviderModule } from '../../services/blog-post/blog-post.provider.module';
import { BlogPostsModule } from './blog-posts/blog-posts.module';
import { CategoryProviderModule } from '../../services/category/category.provider.module';
import { CommentsModule } from './comments/comments.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    BlogPostsModule,
    CommentsModule,
    LayoutModule,
    CategoryProviderModule.forRoot(),
    BlogPostProviderModule.forRoot()
  ]
})
export class MainModule { }
