import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { NbButtonModule, NbWindowModule, NbInputModule } from '@nebular/theme';
import { BlogPostsComponent } from './blog-posts.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BlogPostsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NbButtonModule,
    NbInputModule,
    A11yModule,
    NbWindowModule.forRoot()
  ],
  exports: [
    BlogPostsComponent
  ]
})
export class BlogPostsModule { }
