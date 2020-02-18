import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '../main.service';
import { BlogPost } from '../../models/blog-post.model';
import { Response } from '../../models/response.model';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class BlogPostService extends MainService {

  readonly apiUrl = 'BlogPosts';

  create(blogPost: BlogPost): Observable<BlogPost> {
    return super.post(this.apiUrl, blogPost);
  }

  search(term: string): Observable<Response<BlogPost>> {
    const params = new HttpParams({fromObject: {term}});
    return super.get(`${this.apiUrl}/Search`, { params });
  }

  findAll(categoryId?: string): Observable<Response<BlogPost>> {
    if (!categoryId) {
      return super.get(this.apiUrl);
    } else {
      const params = new HttpParams({fromObject: {categoryId}});
      return super.get(`${this.apiUrl}/GetPostByCategory`, { params });
    }
  }

  update(blogPost: BlogPost): Observable<BlogPost> {
    return super.put(`${this.apiUrl}/${blogPost.id}`, blogPost);
  }

  deleteBlogPost(id: number) {
    return super.delete(`${this.apiUrl}/${id}`);
  }

}
