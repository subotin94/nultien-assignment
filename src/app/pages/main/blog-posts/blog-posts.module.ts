import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NbButtonModule, NbWindowModule, NbInputModule, NbSpinnerModule, NbCardModule, NbAlertModule } from '@nebular/theme';
import { BlogPostsComponent } from './blog-posts.component';
import { BlogPostCardModule } from '../../../components/blog-post-card/blog-post-card.module';
import { CategoryProviderModule } from '../../../services/category/category.provider.module';

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
    RouterModule,
    NbAlertModule,
    CategoryProviderModule.forChild(),
    NbWindowModule.forChild()
  ],
  exports: [
    BlogPostsComponent
  ]
})
export class BlogPostsModule { }
