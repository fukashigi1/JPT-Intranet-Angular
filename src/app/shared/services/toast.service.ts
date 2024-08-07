import { ApplicationRef, Injectable, inject, createComponent } from '@angular/core';
import { ToastComponent } from '../ui/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  private toastContainer: HTMLElement | null = null;

  private appRef = inject(ApplicationRef);

  constructor()
  {
    if (typeof window !== 'undefined') {
      this.toastContainer = document.getElementById('toastContainer');
    }
  }
  
  async showToast(text: string, type: string, duration: number, closable: boolean = true) {
    if (!this.toastContainer) {
      console.error('Toast container not found');
      return;
    }

    const environmentInjector = this.appRef.injector;
    const componentRef = createComponent(ToastComponent, {hostElement: this.toastContainer, environmentInjector})

    componentRef.instance.text.set(text);
    componentRef.instance.duration.set(duration);
    componentRef.instance.type.set(type);
    componentRef.instance.closable.set(closable);


    this.appRef.attachView(componentRef.hostView);
    componentRef.changeDetectorRef.detectChanges();
  }
}