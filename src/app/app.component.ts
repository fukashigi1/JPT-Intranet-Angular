import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/ui/header/header.component';
import { ThemeService } from './shared/services/theme.service';
import { LeftSideBarComponent } from './shared/ui/left-side-bar/left-side-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, LeftSideBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private themeService: ThemeService) {

  }

  onThemeSwitchChange(): void {
    this.themeService.SwitchTheme();
  }
}
