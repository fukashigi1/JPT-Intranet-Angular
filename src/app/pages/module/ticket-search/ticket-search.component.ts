import { Component, inject, ViewContainerRef } from '@angular/core';
import { InputTypeTextComponent } from '../../../shared/ui/input-type-text/input-type-text.component';
import { InputTypeSelectComponent } from '../../../shared/ui/input-type-select/input-type-select.component';
import { ToastComponent } from '../../../shared/ui/toast/toast.component';
import { ToastService } from '../../../shared/services/toast.service';

@Component({
  selector: 'app-ticket-search',
  standalone: true,
  imports: [InputTypeTextComponent, InputTypeSelectComponent, ToastComponent],
  templateUrl: './ticket-search.component.html',
  styleUrl: './ticket-search.component.scss'
})
export class TicketSearchComponent {

  toastService = inject(ToastService);
  

  public callToast(type: string): void {
    this.toastService.showToast('Esto es prueba xD', type, 5);
  }

  public callModal(): void {
    
  }
}
