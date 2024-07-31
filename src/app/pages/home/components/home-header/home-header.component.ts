import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ActivePageService } from '../../../../shared/services/active-page.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-header',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.scss'
})
export class HomeHeaderComponent {

  activePageService = inject(ActivePageService)

  setActiveTab(name: string): void {
    this.activePageService.setHomeHeaderActiveTab(name);
  }
}
