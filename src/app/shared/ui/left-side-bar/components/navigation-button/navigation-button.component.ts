import { Component, input, OnInit, Inject, PLATFORM_ID, WritableSignal, signal } from '@angular/core';
import { TooltipDirective } from '../../../../directives/tooltip.directive';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'navigation-button',
  standalone: true,
  imports: [TooltipDirective, CommonModule, RouterLink],
  templateUrl: './navigation-button.component.html',
  styleUrls: ['./navigation-button.component.scss']
})
export class NavigationButtonComponent implements OnInit {
  public isLeftMenuOpen = input.required<boolean>();
  public link = input.required<string>();
  public activeTab = input.required<string>();
  public displayName = input.required<string>();
  public displayIcon = input.required<string>();

  safeHtml: SafeHtml | undefined;
  isBrowser = false;

  constructor(private sanitizer: DomSanitizer, @Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {

    if (this.isBrowser) {
      // Solo ejecutar esto en el navegador
      this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(this.displayIcon());
    }
  }
}