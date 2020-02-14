import { Component, ViewChild, TemplateRef } from '@angular/core';
import { NbWindowService } from '@nebular/theme';
import { SubSink } from 'subsink';
import { SubComponent } from '../../../core/sub-component.interface';
import { BlogPostService } from '../../../services/blog-post/blog-post.service';

@Component({
  selector: 'blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.scss']
})
export class BlogPostsComponent implements SubComponent {

  readonly subs = new SubSink();

  @ViewChild('addBlogForm', { static: true })
  addBlogForm: TemplateRef<HTMLFormElement>;

  constructor(private readonly blogPostService: BlogPostService,
              private readonly windowService: NbWindowService) { }

  ngOnInit(): void {
    this.loadBlogs();
  }

  loadBlogs(): void {
    this.subs.add(this.blogPostService.findAll().subscribe(res => {
      // console.log(res);
    }));
  }

  openAddBlogWindow(): void {
    this.windowService.open(this.addBlogForm);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
