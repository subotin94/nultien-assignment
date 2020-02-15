import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { BlogPostCardComponent } from './blog-post-card.component';

@NgModule({
  declarations: [
    BlogPostCardComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule
  ],
  exports: [
    BlogPostCardComponent
  ]
})
export class BlogPostCardModule { }
