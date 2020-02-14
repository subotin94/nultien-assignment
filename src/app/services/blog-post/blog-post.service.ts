import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '../main.service';
import { BlogPost } from '../../models/blog-post.model';
import { Response } from '../../models/response.model';

@Injectable()
export class BlogPostService extends MainService {

  readonly apiUrl = 'BlogPosts';

  create(blogPost: BlogPost): Observable<BlogPost> {
    return super.post(this.apiUrl, blogPost);
  }

  findAll(): Observable<Response<BlogPost>> {
    return super.get(this.apiUrl);
  }

}
