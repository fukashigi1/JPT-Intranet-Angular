import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ActivePageService {

  homeHeaderActiveTab: WritableSignal<string> = signal('news');
  leftSideBarActiveTab: WritableSignal<string> = signal('home');


  public setHomeHeaderActiveTab(name: string): void {
    this.homeHeaderActiveTab.set(name);
  }

  public getHomeHeaderActiveTab(): string {
    return this.homeHeaderActiveTab();
  }

  public setLeftSideBarActiveTab(name: string): void {
    this.leftSideBarActiveTab.set(name);
  }

  public getLeftSideBarActiveTab(): string {
    return this.leftSideBarActiveTab();
  }
}
