import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NbSidebarService, NbToastrService, NbSearchService } from '@nebular/theme';
import { SubSink } from 'subsink';
import { CategoryService } from '../../services/category/category.service';
import { SubComponent } from '../../core/sub-component.interface';
import { Category } from '../../models/category.model';
import { SearchService } from '../../services/search/search.service';

type SidebarState = 'expanded' | 'collapsed';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements SubComponent {

  readonly subs = new SubSink();
  @Input() showCategories = false;
  addCategoryForm: FormGroup;
  categories: Category[] = [];
  showAddCategory = false;

  constructor(private readonly sidebarService: NbSidebarService,
              private readonly toastService: NbToastrService,
              private readonly categoryService: CategoryService,
              private readonly searchService: SearchService,
              private readonly nbSearchService: NbSearchService,
              private readonly router: Router,
              private readonly formBuilder: FormBuilder,
              private readonly breakpointObserver: BreakpointObserver) {
    this.addCategoryForm = this.formBuilder.group({
      name: [null]
    });
  }

  ngOnInit(): void {
    this.subs.add(this.nbSearchService.onSearchSubmit().subscribe(search => {
      if (this.isSmallerScreen) {
        this.sidebarService.collapse();
      }
      this.searchService.onSearch.next(search.term);
    }));
    if (this.showCategories) {
      this.subs.add(this.categoryService.findAll().subscribe(res => {
        this.categories = res.resultData;
      }));
    }
  }

  createCategory(): void {
    const category = new Category(this.addCategoryForm.get('name').value);
    this.subs.add(this.categoryService.create(category).subscribe(res => {
      this.addCategoryForm.reset();
      this.showAddCategory = false;
      this.categories.push(res);
      this.toastService.success('Successfully created category', 'Success');
    }));
  }

  toggle(): void {
    this.sidebarService.toggle();
  }

  get showSearch(): boolean {
    const url = this.router.url;
    return (url.includes('blog-posts') || url.includes('blog-posts'));
  }

  get sidebarState(): SidebarState {
    if (!this.isSmallerScreen && !this.showCategories) {
      return 'collapsed';
    }
    return this.isSmallerScreen ? 'collapsed' : 'expanded';
  }

  get isSmallerScreen(): boolean {
    return this.breakpointObserver.isMatched('(max-width: 768px)');
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}
