import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NbButtonModule } from '@nebular/theme';
import { RouterModule } from '@angular/router';
import { IconsModule } from '../../../components/icons/icons.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NbButtonModule,
    RouterModule,
    IconsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
