import { Component, Input, Output, EventEmitter } from '@angular/core';
import { BlogPost } from '../../models/blog-post.model';

@Component({
  selector: 'blog-post-card',
  templateUrl: './blog-post-card.component.html',
  styleUrls: ['./blog-post-card.component.scss']
})
export class BlogPostCardComponent {
  @Input() blogPost: BlogPost;
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();
}
