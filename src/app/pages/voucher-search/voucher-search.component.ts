import { Component, signal, WritableSignal } from '@angular/core';
import { InputTypeTextComponent } from '../../shared/ui/input-type-text/input-type-text.component';

@Component({
  selector: 'app-voucher-search',
  standalone: true,
  imports: [InputTypeTextComponent],
  templateUrl: './voucher-search.component.html',
  styleUrl: './voucher-search.component.scss'
})
export class VoucherSearchComponent {
  
  public didSearch:WritableSignal<boolean> = signal(false);
  public hasLoaded:WritableSignal<boolean> = signal(true);

  public searchVoucher(): void {
    this.didSearch.set(true);
  }
}
