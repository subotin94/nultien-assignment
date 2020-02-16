import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryProviderModule } from './services/category/category.provider.module';
import { SearchProviderModule } from './services/search/search.provider.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SearchProviderModule.forRoot(),
    CategoryProviderModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
