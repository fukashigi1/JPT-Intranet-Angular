import { Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('openCloseOptions', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s ease-in', style({ opacity: 1 }))
      ]),
      transition(':leave', [
        animate('1s ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class HeaderComponent {

  isProfileOptionsEnabled: boolean = false;

  public showUserOptions(): void {
    this.isProfileOptionsEnabled = !this.isProfileOptionsEnabled;
  }
}
