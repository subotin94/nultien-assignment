import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  onSearch = new Subject<string>();
}
