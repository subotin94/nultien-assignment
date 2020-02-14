import { NgModule, ModuleWithProviders } from '@angular/core';
import { BlogPostService } from './blog-post.service';

/**
 * Using services in the providers list in two separate lazy loaded modules causes
 * two service instances which isnt good specially for services that emits streams
 * I suppose this can(should) be done better but so far i found this as a temporary workaround.
 */
@NgModule({
  providers: [BlogPostService]
})
export class BlogPostProviderModule {
  static forRoot(): ModuleWithProviders<BlogPostProviderModule> {
    return {
      ngModule: BlogPostProviderModule,
      providers: [BlogPostService]
    };
  }
}
