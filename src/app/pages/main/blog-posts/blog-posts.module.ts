import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbWindowModule, NbInputModule, NbToastrModule, NbSpinnerModule, NbCardModule } from '@nebular/theme';
import { BlogPostsComponent } from './blog-posts.component';
import { BlogPostCardModule } from '../../../components/blog-post-card/blog-post-card.module';

@NgModule({
  declarations: [
    BlogPostsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BlogPostCardModule,
    NbButtonModule,
    NbCardModule,
    NbInputModule,
    NbSpinnerModule,
    NbToastrModule.forRoot({hasIcon: true}),
    NbWindowModule.forRoot()
  ],
  exports: [
    BlogPostsComponent
  ]
})
export class BlogPostsModule { }
