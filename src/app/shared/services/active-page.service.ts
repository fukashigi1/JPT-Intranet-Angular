import { Injectable, signal, WritableSignal } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ActivePageService {

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updateLeftSideBarActiveTab();
    });
  }

  homeHeaderActiveTab: WritableSignal<string> = signal('news');
  leftSideBarActiveTab: WritableSignal<string> = signal('home/news');

  public setHomeHeaderActiveTab(name: string): void {
    this.homeHeaderActiveTab.set(name);
  }

  public getHomeHeaderActiveTab(): string {
    return this.homeHeaderActiveTab();
  }

  private updateLeftSideBarActiveTab(): void {
    if (this.router.url.includes('home')) {
      this.leftSideBarActiveTab.set('/home/news');
    } else {
      this.leftSideBarActiveTab.set(this.router.url);
    }
  }

  public getLeftSideBarActiveTab(): string {
    return this.leftSideBarActiveTab();
  }
}