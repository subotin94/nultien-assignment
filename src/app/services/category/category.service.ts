import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MainService } from '../main.service';
import { Response } from '../../models/response.model';
import { Category } from '../../models/category.model';

@Injectable()
export class CategoryService extends MainService {

  readonly apiUrl = 'Category';

  create(category: Category): Observable<Category> {
    return super.post(this.apiUrl, category);
  }

  findAll(search?: string): Observable<Response<Category>> {
    return super.get(this.apiUrl);
  }

  update(category: Category): Observable<Category> {
    return super.put(`${this.apiUrl}/${category.id}`, category);
  }

}
