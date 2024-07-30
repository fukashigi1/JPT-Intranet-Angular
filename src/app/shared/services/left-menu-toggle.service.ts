import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LeftMenuToggleService {

  public isLeftMenuOpen = false;
  public toggleMenu():void {
    this.isLeftMenuOpen = !this.isLeftMenuOpen;
  }
}
