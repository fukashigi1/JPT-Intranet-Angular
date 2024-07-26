import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { ClickOutsideDirective } from '../../directives/click.outside.directive';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ClickOutsideDirective],
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

  isProfileOptionsEnabled: boolean = false;

  public showUserOptions(): void {
    this.isProfileOptionsEnabled = !this.isProfileOptionsEnabled;
  }

  public clickedOutside(): void {
    this.isProfileOptionsEnabled = false;
  }
}
