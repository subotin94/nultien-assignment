import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { LayoutModule } from '../../components/layout/layout.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    LayoutModule,
    HomeModule,
  ]
})
export class LandingModule { }
