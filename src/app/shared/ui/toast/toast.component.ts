import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewChild, NgZone, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('toast-enter', [
      transition(':enter', [
        style({
          opacity: 0,
          right: '-200px'
        }),
        animate('0.2s', style({
          opacity: 1,
          right: '10px'
        })),
        animate('0.1s', style({
          right: '0px'
        }))
      ])
    ])
  ]
})
export class ToastComponent implements AfterViewInit {
  public text: WritableSignal<string> = signal('');
  public type: WritableSignal<string> = signal('');
  public duration: WritableSignal<number> = signal(5);
  public closable: WritableSignal<boolean> = signal(true);

  @ViewChild('toastWrapper', { static: true }) toastWrapper: ElementRef | undefined;

  constructor(
    private renderer: Renderer2,
    private ngZone: NgZone
  ) {}

  ngAfterViewInit(): void {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.destroyElement();
      }, this.duration() * 1000);
    });
  }

  public destroyElement(): void {
    if (this.toastWrapper) {
      this.renderer.addClass(this.toastWrapper.nativeElement, 'toast-leave');
    }

    setTimeout(() => {
      this.ngZone.run(() => {
        const viewContainer = this.toastWrapper?.nativeElement.parentElement;
        if (viewContainer) {
          viewContainer.removeChild(this.toastWrapper?.nativeElement);
        }
      });
    }, 500);
  }
}
