import { Component, inject } from '@angular/core';
import { LeftMenuToggleService } from '../../services/left-menu-toggle.service';
import { CommonModule } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { TooltipDirective } from '../../directives/tooltip.directive';
import { RouterLink } from '@angular/router';
import { ActivePageService } from '../../services/active-page.service';
import { NavigationButtonComponent } from './components/navigation-button/navigation-button.component';

@Component({
  selector: 'app-left-side-bar',
  standalone: true,
  imports: [CommonModule, TooltipDirective, RouterLink, NavigationButtonComponent],
  templateUrl: './left-side-bar.component.html',
  styleUrl: './left-side-bar.component.scss',
  animations: [
    trigger('open-close-menu', [
      state('closed', style(
        {
          width: '40px',
          "padding-left": '0',
          "padding-right": '0'
        }
        )),
      state('open', style({width: '220px'})),
      transition('closed <=> open', [animate('0.2s ease-out')])
    ])
  ]
})
export class LeftSideBarComponent {

  public activePageService = inject(ActivePageService);
  public leftMenuToggleService = inject(LeftMenuToggleService);

}
