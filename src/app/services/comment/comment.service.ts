import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MainService } from '../main.service';
import { Response } from '../../models/response.model';
import { Comment } from '../../models/comment.model';

@Injectable()
export class CommentService extends MainService {

  readonly apiUrl = 'Comment';

  create(comment: Comment): Observable<Comment> {
    return super.post(this.apiUrl, comment);
  }

  findAll(): Observable<Response<Comment>> {
    return super.get(this.apiUrl);
  }

  search(term: string): Observable<Response<Comment>> {
    const params = new HttpParams({fromObject: {term}});
    return super.get(`${this.apiUrl}/Search`, { params });
  }

  update(comment: Comment): Observable<Comment> {
    return super.put(`${this.apiUrl}/${comment.id}`, comment);
  }

  deleteComment(id: number) {
    return super.delete(`${this.apiUrl}/${id}`);
  }

}
