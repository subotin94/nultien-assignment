import { Component, ViewChild, TemplateRef, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { NbWindowService, NbWindowRef, NbToastrService } from '@nebular/theme';
import { SubSink } from 'subsink';
import { SubComponent } from '../../../core/sub-component.interface';
import { BlogPostService } from '../../../services/blog-post/blog-post.service';
import { BlogPost } from '../../../models/blog-post.model';
import { CategoryService } from '../../../services/category/category.service';
import { SearchService } from '../../../services/search/search.service';
import { Location } from '@angular/common';

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
  searchTerm: string;
  loadingBlogs = false;

  categoryId: string;

  constructor(private readonly blogPostService: BlogPostService,
              private readonly windowService: NbWindowService,
              private readonly route: ActivatedRoute,
              private readonly searchService: SearchService,
              private readonly router: Router,
              private readonly location: Location,
              private readonly categoryService: CategoryService,
              private readonly toastService: NbToastrService,
              private readonly formBuilder: FormBuilder) {
    this.blogPostForm = this.formBuilder.group({
      title: [null, Validators.required],
      text: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.subscribeOnSearch();
    this.subscribeOnCategoryChange();
  }

  search(term: string): void {
    this.subs.add(this.blogPostService.search(term).subscribe(res => {
      if (this.router.url.includes('category')) {
        this.location.go('/main/blog-posts');
      }
      this.blogPosts = res.resultData;
    }));
  }

  get hasScroll(): boolean {
    const el = this.scrollableContainerRef.nativeElement;
    return el.offsetHeight > el.clientHeight;
  }

  private subscribeOnSearch(): void {
    this.subs.add(this.searchService.onSearch.subscribe(search => {
      this.searchTerm = search;
      this.search(search);
    }));
  }

  private subscribeOnCategoryChange(): void {
    this.route.parent.paramMap.subscribe(paramMap => {
      this.categoryId = paramMap['params'].id;
      this.loadBlogs(this.categoryId);
    });
  }

  loadBlogs(categoryId: string, search?: string): void {
    this.searchTerm = null;
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
