import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BlogPostService } from './blog-post.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [BlogPostService]
})
export class BlogPostProviderModule {
  static forRoot(): ModuleWithProviders<BlogPostProviderModule> {
    return {
      ngModule: BlogPostProviderModule,
      providers: [BlogPostService]
    };
  }
  static forChild(): ModuleWithProviders<BlogPostProviderModule> {
    return {
      ngModule: BlogPostProviderModule,
      providers: [BlogPostService]
    };
  }
}
