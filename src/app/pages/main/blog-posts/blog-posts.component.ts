import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { SubSink } from 'subsink';
import { SubComponent } from '../../../core/sub-component.interface';
import { BlogPostService } from '../../../services/blog-post/blog-post.service';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { BlogPost } from '../../../models/blog-post.model';

@Component({
  selector: 'blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements SubComponent {

  readonly subs = new SubSink();

  @ViewChild('addBlogForm', { static: true })
  addBlogFormRef: TemplateRef<HTMLFormElement>;
  blogPosts: BlogPost[] = [];
  blogPostForm: FormGroup;

  constructor(private readonly blogPostService: BlogPostService,
              private readonly windowService: NbWindowService,
              private readonly formBuilder: FormBuilder) {
    this.blogPostForm = this.formBuilder.group({
      title: [null, Validators.required],
      text: [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.subs.add(this.blogPostService.findAll().subscribe(res => {
      this.blogPosts = res.resultData;
    }));
  }

  openAddBlogWindow(): void {
    const ref = this.windowService.open(this.addBlogFormRef, {title: 'Add blog post'});
  }

  createBlog(): void {
    const blogPost = new BlogPost(this.title.value, this.text.value);
    this.subs.add(this.blogPostService.create(blogPost).subscribe(res => {
      console.log(res);
    }));
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
