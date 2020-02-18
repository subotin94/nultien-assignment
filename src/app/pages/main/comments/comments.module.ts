import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NbAlertModule, NbSpinnerModule, NbInputModule, NbCardModule, NbWindowModule, NbButtonModule } from '@nebular/theme';
import { CommentsComponent } from './comments.component';
import { CommentCardModule } from '../../../components/comment-card/comment-card.module';
import { CommentProviderModule } from '../../../services/comment/comment.provider.module';

@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    NbAlertModule,
    NbSpinnerModule,
    NbInputModule,
    ReactiveFormsModule,
    CommentCardModule,
    NbCardModule,
    NbButtonModule,
    CommentProviderModule.forChild(),
    NbWindowModule.forChild()
  ],
  exports: [
    CommentsComponent
  ]
})
export class CommentsModule { }
