import { Component, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NbWindowService, NbWindowRef, NbToastrService } from '@nebular/theme';
import { SubSink } from 'subsink';
import { SubComponent } from '../../../core/sub-component.interface';
import { BlogPostService } from '../../../services/blog-post/blog-post.service';
import { BlogPost } from '../../../models/blog-post.model';
import { CdkScrollable } from '@angular/cdk/overlay';

@Component({
  selector: 'blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements SubComponent {

  readonly subs = new SubSink();

  @ViewChild('addBlogForm', { static: true })
  addBlogFormRef: TemplateRef<HTMLFormElement>;
  @ViewChild('scrollable', { static: true })
  scrollableContainerRef: ElementRef<HTMLDivElement>;
  windowRef: NbWindowRef;
  blogPostForm: FormGroup;
  blogPostForEdit: BlogPost;
  blogPosts: BlogPost[] = [];
  loading = false;
  loadingBlogs = false;

  categoryId: string;

  constructor(private readonly blogPostService: BlogPostService,
              private readonly windowService: NbWindowService,
              private readonly route: ActivatedRoute,
              private readonly toastService: NbToastrService,
              private readonly formBuilder: FormBuilder) {
    this.blogPostForm = this.formBuilder.group({
      title: [null, Validators.required],
      text: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.subscribeOnCategoryChange();
  }

  get hasScroll(): boolean {
    const el = this.scrollableContainerRef.nativeElement;
    return el.offsetHeight > el.clientHeight;
  }

  private subscribeOnCategoryChange() {
    this.route.parent.paramMap.subscribe(paramMap => {
      this.categoryId = paramMap['params'].id;
      this.loadBlogs(this.categoryId);
    });
  }

  loadBlogs(categoryId: string): void {
    this.loadingBlogs = true;
    this.subs.add(this.blogPostService.findAll(categoryId).subscribe(res => {
      this.loadingBlogs = false;
      this.blogPosts = res.resultData;
    }));
  }

  openBlogWindow(blogPost?: BlogPost): void {
    if (this.windowRef) {
      return;
    } else if (blogPost) {
      this.blogPostForEdit = blogPost;
      const { title, text } = blogPost;
      this.blogPostForm.setValue({title, text});
    } else {
      this.blogPostForm.reset();
    }
    const title = blogPost ? 'Edit blog post' : 'Add blog post';
    this.windowRef = this.windowService.open(this.addBlogFormRef, { title });
    this.subs.add(this.windowRef.onClose.subscribe(() => this.windowRef = null));
  }

  saveBlog(): void {
    this.loading = true;
    if (this.blogPostForEdit) {
      this.blogPostForEdit.title = this.title.value;
      this.blogPostForEdit.text = this.text.value;
      this.subs.add(this.blogPostService.update(this.blogPostForEdit).subscribe(() => {
        this.windowRef.close();
        this.loading = false;
        this.toastService.success('Successfully updated blog post', 'Success');
      }));
    } else {
      const blogPost = new BlogPost(this.title.value, this.text.value, Number(this.categoryId));
      this.subs.add(this.blogPostService.create(blogPost).subscribe(res => {
        this.windowRef.close();
        this.blogPosts.push(res);
        this.loading = false;
        this.toastService.success('Successfully created blog post', 'Success');
      }));
    }
  }

  get title(): AbstractControl {
    return this.blogPostForm.get('title');
  }

  get text(): AbstractControl {
    return this.blogPostForm.get('text');
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
