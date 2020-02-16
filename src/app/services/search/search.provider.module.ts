import { NgModule, ModuleWithProviders } from '@angular/core';
import { SearchService } from './search.service';

@NgModule({
  providers: [SearchService]
})
export class SearchProviderModule {
  static forRoot(): ModuleWithProviders<SearchProviderModule> {
    return {
      ngModule: SearchProviderModule,
      providers: [SearchService]
    };
  }
  static forChild(): ModuleWithProviders<SearchProviderModule> {
    return {
      ngModule: SearchProviderModule,
      providers: [SearchService]
    };
  }
}
