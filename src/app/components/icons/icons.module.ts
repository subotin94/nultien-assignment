import { NgModule } from '@angular/core';
import { LogoComponent } from './logo.component';

const ICONS = [
  LogoComponent
];

@NgModule({
  declarations: ICONS,
  exports: ICONS
})
export class IconsModule { }
