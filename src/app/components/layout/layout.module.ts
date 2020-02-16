import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutModule as CdkLayoutModule } from '@angular/cdk/layout';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule, NbInputModule, NbToastrModule, NbSearchModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LayoutComponent } from './layout.component';
import { IconsModule } from '../icons/icons.module';
import { CategoryProviderModule } from '../../services/category/category.provider.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchProviderModule } from '../../services/search/search.provider.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    CdkLayoutModule,
    IconsModule,
    ReactiveFormsModule,
    NbInputModule,
    NbSearchModule,
    NbToastrModule.forRoot({hasIcon: true}),
    SearchProviderModule.forChild(),
    CategoryProviderModule.forChild(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot()
  ],
  exports: [
    LayoutComponent,
    NbToastrModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbThemeModule
  ]
})
export class LayoutModule { }
