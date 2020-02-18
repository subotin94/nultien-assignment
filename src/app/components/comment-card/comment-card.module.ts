import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbButtonModule } from '@nebular/theme';
import { CommentCardComponent } from './comment-card.component';

@NgModule({
  declarations: [
    CommentCardComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbButtonModule
  ],
  exports: [
    CommentCardComponent
  ]
})
export class CommentCardModule { }
