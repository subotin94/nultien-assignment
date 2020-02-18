import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Comment } from '../../models/comment.model';

@Component({
  selector: 'comment-card',
  templateUrl: './comment-card.component.html',
  styleUrls: ['./comment-card.component.scss']
})
export class CommentCardComponent implements OnInit {
  @Input() comment: Comment;
  @Output() edit = new EventEmitter<void>();
  @Output() delete = new EventEmitter<void>();

  ngOnInit(): void {
    /**
     * @bug
     * It seems like server is not creating this field so i added
     * it manually just for placeholder purpose.
     * Blog posts one works well tho.
     */
    if (!this.comment.createdAt) {
      this.comment.createdAt = new Date();
    }
  }
}
