import { Component, ViewChild, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NbWindowRef, NbToastrService, NbWindowService } from '@nebular/theme';
import { SubSink } from 'subsink';
import { SubComponent } from '../../../core/sub-component.interface';
import { Comment } from '../../../models/comment.model';
import { SearchService } from '../../../services/search/search.service';
import { CommentService } from '../../../services/comment/comment.service';

@Component({
  selector: 'comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements SubComponent {

  readonly subs = new SubSink();

  @ViewChild('addCommentForm', { static: true })
  addCommentFormRef: TemplateRef<HTMLFormElement>;
  windowRef: NbWindowRef;
  commentForm: FormGroup;
  commentForEdit: Comment;
  comments: Comment[] = [];
  loading = false;
  searchTerm: string;
  loadingComments = false;

  constructor(private readonly formBuilder: FormBuilder,
              private readonly windowService: NbWindowService,
              private readonly commentService: CommentService,
              private readonly toastService: NbToastrService,
              private readonly searchService: SearchService) {
    this.commentForm = this.formBuilder.group({
      title: [null, Validators.required],
      text: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.subscribeOnSearch();
    this.loadComments();
  }

  loadComments(): void {
    this.searchTerm = null;
    this.loadingComments = true;
    this.subs.add(this.commentService.findAll().subscribe(res => {
      this.loadingComments = false;
      this.comments = res.resultData;
    }));
  }

  openCommentWindow(comment?: Comment): void {
    if (this.windowRef) {
      return;
    } else if (comment) {
      this.commentForEdit = comment;
      const { title, text } = comment;
      this.commentForm.setValue({title, text});
    } else {
      this.commentForm.reset();
    }
    const title = comment ? 'Edit comment' : 'Add comment';
    this.windowRef = this.windowService.open(this.addCommentFormRef, { title });
    this.subs.add(this.windowRef.onClose.subscribe(() => this.windowRef = null));
  }

  saveComment(): void {
    this.loading = true;
    if (this.commentForEdit) {
      this.commentForEdit.title = this.title.value;
      this.commentForEdit.text = this.text.value;
      this.subs.add(this.commentService.update(this.commentForEdit).subscribe(() => {
        this.windowRef.close();
        this.loading = false;
        this.toastService.success('Successfully updated comment', 'Success');
      }));
    } else {
      const comment = new Comment(this.title.value, this.text.value);
      this.subs.add(this.commentService.create(comment).subscribe(res => {
        this.windowRef.close();
        this.comments.push(res);
        this.loading = false;
        this.toastService.success('Successfully created comment', 'Success');
      }));
    }
  }

  search(term: string): void {
    this.loadingComments = true;
    this.subs.add(this.commentService.search(term).subscribe(res => {
      this.comments = res.resultData;
      this.loadingComments = false;
    }));
  }

  delete(id: number): void {
    this.subs.add(this.commentService.deleteComment(id).subscribe(() => this.loadComments()));
  }

  private subscribeOnSearch(): void {
    this.subs.add(this.searchService.onSearch.subscribe(search => {
      this.searchTerm = search;
      this.search(search);
    }));
  }

  get title(): AbstractControl {
    return this.commentForm.get('title');
  }

  get text(): AbstractControl {
    return this.commentForm.get('text');
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
