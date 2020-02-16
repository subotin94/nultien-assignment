import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CategoryService } from './category.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [CategoryService]
})
export class CategoryProviderModule {
  static forRoot(): ModuleWithProviders<CategoryProviderModule> {
    return {
      ngModule: CategoryProviderModule,
      providers: [CategoryService]
    };
  }
  static forChild(): ModuleWithProviders<CategoryProviderModule> {
    return {
      ngModule: CategoryProviderModule,
      providers: [CategoryService]
    };
  }
}
