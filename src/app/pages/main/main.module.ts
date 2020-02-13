import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { BlogPostsModule } from './blog-posts/blog-posts.module';

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    LayoutModule,
    BlogPostsModule
  ]
})
export class MainModule { }
