import { Component, signal, WritableSignal } from '@angular/core';
import { InputTypeTextComponent } from '../../shared/ui/input-type-text/input-type-text.component';
import { InputTypeSelectComponent } from '../../shared/ui/input-type-select/input-type-select.component';
import { SelectItem } from '../../shared/interfaces/select-item';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [InputTypeTextComponent, InputTypeSelectComponent],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
  animations: [
    trigger('pop-card', [
      transition(':enter', [
        style(
          {
            opacity: 0
          }
        ),
        animate('0.2s', style(
          {
            opacity: 1
          }
        ))
      ])
    ])
  ]
})
export class ProductSearchComponent {
  
  public didSearch: WritableSignal<boolean> = signal(false);

  public hasLoaded: WritableSignal<boolean> = signal(false);

  public searchProduct(): void {
    this.didSearch.set(true);
  }

}
