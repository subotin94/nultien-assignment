import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryProviderModule } from './services/category/category.provider.module';
import { SearchProviderModule } from './services/search/search.provider.module';
import { NbWindowModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbWindowModule.forRoot(),
    SearchProviderModule.forRoot(),
    CategoryProviderModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
