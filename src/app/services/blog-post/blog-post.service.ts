import { Injectable } from '@angular/core';
import { MainService } from '../main.service';

@Injectable()
export class BlogPostService extends MainService {

  readonly apiUrl = 'BlogPosts';

  findAll() {
    return super.get(this.apiUrl);
  }

}
