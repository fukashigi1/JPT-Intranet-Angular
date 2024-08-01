import { Component, input, OnInit } from '@angular/core';
import { TooltipDirective } from '../../../../directives/tooltip.directive';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'navigation-button',
  standalone: true,
  imports: [TooltipDirective, CommonModule, RouterLink],
  templateUrl: './navigation-button.component.html',
  styleUrl: './navigation-button.component.scss'
})
export class NavigationButtonComponent implements OnInit{
  public isLeftMenuOpen = input.required<boolean>();
  public link = input.required<string>();
  public activeTab = input.required<string>();
  public displayName = input.required<string>();
  public displayIcon = input.required<string>();
  public buttonName = input.required<string>();

  svgIcon: SafeHtml = '';

  constructor(private sanitizer: DomSanitizer) {}
  
  ngOnInit() {
    const svgString = this.displayIcon(); // Tu cadena SVG aquí
    this.svgIcon = this.sanitizer.bypassSecurityTrustHtml(svgString);
  }
}
