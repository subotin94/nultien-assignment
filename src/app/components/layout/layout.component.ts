import { Component, Input } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { NbSidebarService } from '@nebular/theme';

type SidebarState = 'expanded' | 'collapsed';

@Component({
  selector: 'layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {

  @Input() showSidebar: boolean = false;

  constructor(private readonly sidebarService: NbSidebarService,
              private readonly breakpointObserver: BreakpointObserver) { }

  get sidebarState(): SidebarState {
    return this.isSmallerScreen ? 'collapsed' : 'expanded';
  }

  get isSmallerScreen(): boolean {
    return this.breakpointObserver.isMatched('(max-width: 768px)');
  }

  toggle(): void {
    this.sidebarService.toggle();
  }

}
