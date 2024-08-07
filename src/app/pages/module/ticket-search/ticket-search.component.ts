import { Component } from '@angular/core';
import { InputTypeTextComponent } from '../../../shared/ui/input-type-text/input-type-text.component';
import { InputTypeSelectComponent } from '../../../shared/ui/input-type-select/input-type-select.component';
import { ToastComponent } from '../../../shared/ui/toast/toast.component';

@Component({
  selector: 'app-ticket-search',
  standalone: true,
  imports: [InputTypeTextComponent, InputTypeSelectComponent, ToastComponent],
  templateUrl: './ticket-search.component.html',
  styleUrl: './ticket-search.component.scss'
})
export class TicketSearchComponent {

  public callToast(type: string): void {
    
  }
}
