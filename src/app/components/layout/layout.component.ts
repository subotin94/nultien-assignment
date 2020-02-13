import { Component, OnInit, Input } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { SubComponent } from '../../core/sub-component.interface';
import { SubSink } from 'subsink';

type SidebarMode = 'opened' | 'collapsed';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements SubComponent {

  readonly subs = new SubSink();

  @Input() showSidebar: boolean = false;

  constructor(private readonly sidenavService: NbSidebarService) { }

  toggle(): void {
    this.sidenavService.toggle();
  }

  ngOnDestroy(): void {

  }

}
