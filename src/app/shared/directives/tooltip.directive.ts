import { ApplicationRef, ComponentFactoryResolver, ComponentRef, Directive, ElementRef, HostListener, Inject, Injector, Input } from '@angular/core';
import { TooltipComponent } from '../ui/tooltip/tooltip.component';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[tooltip]',
  standalone: true
})
export class TooltipDirective {
  @Input() tooltipText = '';
  @Input() tooltipDelay = '0'; 

  private tooltipComponent?: ComponentRef<any>;
  private showTimeout?: number;
  private hideTimeout?: number;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    if (this.showTimeout || this.tooltipComponent) {
      return;
    }

    this.showTimeout = window.setTimeout(() => {
      const tooltipComponentFactory = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
      this.tooltipComponent = tooltipComponentFactory.create(this.injector);
      this.document.body.appendChild(this.tooltipComponent.location.nativeElement);

      this.setTooltipComponentProperties();
      this.tooltipComponent.hostView.detectChanges();
      this.appRef.attachView(this.tooltipComponent.hostView);
    }, parseInt(this.tooltipDelay));
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = undefined;
    }

    if (!this.tooltipComponent || this.hideTimeout) {
      return;
    }

    if(this.tooltipComponent != undefined) {
      this.appRef.detachView(this.tooltipComponent.hostView);
      this.tooltipComponent.destroy();
      this.tooltipComponent = undefined;
      this.hideTimeout = undefined;
    }
  }

  private setTooltipComponentProperties() {
    if (!this.tooltipComponent) {
      return;
    }
  
    // Configurar el texto y otras propiedades del tooltip
    this.tooltipComponent.instance.text = this.tooltipText;
  
    // Obtener el rectángulo del elemento que activa el tooltip
    const { left, right, bottom } = this.elementRef.nativeElement.getBoundingClientRect();
  
    const tooltipContainer = document.createElement('div');
    tooltipContainer.style.visibility = 'hidden';
    tooltipContainer.style.position = 'absolute';
    tooltipContainer.style.top = '0';
    tooltipContainer.style.left = '0';
    tooltipContainer.style.whiteSpace = 'nowrap';
    tooltipContainer.innerText = this.tooltipText;
    document.body.appendChild(tooltipContainer);
    const tooltipWidth = tooltipContainer.offsetWidth;
    document.body.removeChild(tooltipContainer);
  
    let tooltipLeft = (right - left) / 2 + left;
    let tooltipTop = bottom;
  
    if (tooltipLeft + tooltipWidth > window.innerWidth) {
      tooltipLeft = window.innerWidth - tooltipWidth - 10; // 10px de margen
    }
  
    // Asegurarse de que el tooltip no se desborde a la izquierda
    if (tooltipLeft < 10) {
      tooltipLeft = 10; // 10px de margen
    }
  
    this.tooltipComponent.instance.left = tooltipLeft;
    this.tooltipComponent.instance.top = tooltipTop;
  }

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private elementRef: ElementRef,
    private appRef: ApplicationRef,
    @Inject(DOCUMENT) private document: Document
  ) { }
}
