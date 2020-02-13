import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule as CdkLayoutModule } from '@angular/cdk/layout';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbButtonModule, NbIconModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    CdkLayoutModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot()
  ],
  exports: [
    LayoutComponent,
    NbLayoutModule,
    NbEvaIconsModule,
    NbThemeModule
  ]
})
export class LayoutModule { }
