import { Component, inject } from '@angular/core';
import { ActivePageService } from '../../shared/services/active-page.service';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.scss'
})
export class NotFoundComponent {
  activePageService = inject(ActivePageService);
  constructor() {
    this.activePageService.setHomeHeaderActiveTab('news')
    this.activePageService.setLeftSideBarActiveTab('');
  }
}
