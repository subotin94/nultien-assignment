import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { BlogPostsModule } from './blog-posts/blog-posts.module';
import { BlogPostProviderModule } from '../../services/blog-post/blog-post.provider.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    HttpClientModule,
    BlogPostsModule,
    BlogPostProviderModule.forRoot()
  ]
})
export class MainModule { }
