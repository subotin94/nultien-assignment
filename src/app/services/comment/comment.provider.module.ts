import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommentService } from './comment.service';

@NgModule({
  imports: [HttpClientModule],
  providers: [CommentService]
})
export class CommentProviderModule {
  static forRoot(): ModuleWithProviders<CommentProviderModule> {
    return {
      ngModule: CommentProviderModule,
      providers: [CommentService]
    };
  }
  static forChild(): ModuleWithProviders<CommentProviderModule> {
    return {
      ngModule: CommentProviderModule,
      providers: [CommentService]
    };
  }
}
