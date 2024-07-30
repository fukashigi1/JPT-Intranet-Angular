import { Component, inject } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ClickOutsideDirective } from '../../directives/click.outside.directive';
import { LeftMenuToggleService } from '../../services/left-menu-toggle.service';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from '../../directives/tooltip.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ClickOutsideDirective, CommonModule, TooltipDirective],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('openClose', [
      transition(':leave', [
        style({opacity: 1}),
        animate('0.1s ease', style({opacity: 0}))
      ])
    ])
  ]
})
export class HeaderComponent {

  public leftMenuToggleService = inject(LeftMenuToggleService);
  isProfileOptionsEnabled: boolean = false;

  toggleLeftMenu(): void {
    this.leftMenuToggleService.toggleMenu();

  }

  public showUserOptions(): void {
    this.isProfileOptionsEnabled = !this.isProfileOptionsEnabled;
  }

  public clickedOutside(): void {
    this.isProfileOptionsEnabled = false;
  }
}
