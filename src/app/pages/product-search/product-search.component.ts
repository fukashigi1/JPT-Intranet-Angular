import { Component } from '@angular/core';
import { InputTypeTextComponent } from '../../shared/ui/input-type-text/input-type-text.component';
import { InputTypeSelectComponent } from '../../shared/ui/input-type-select/input-type-select.component';
import { SelectItem } from '../../shared/interfaces/select-item';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [InputTypeTextComponent, InputTypeSelectComponent],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss'
})
export class ProductSearchComponent {
  testSelect: SelectItem[] = [
    {
      value: '1',
      name: 'primero'
    },
    {
      value: '2',
      name: 'segundo'
    },
    {
      value: '3',
      name: 'tercero'
    },
    {
      value: '4',
      name: 'tercero tercero tercero tercero tercero tercero'
    }
  ]; 

  selectedItem: SelectItem = this.testSelect[1];

}
