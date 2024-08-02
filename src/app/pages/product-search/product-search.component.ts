import { Component } from '@angular/core';
import { InputTypeTextComponent } from '../../shared/ui/input-type-text/input-type-text.component';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [InputTypeTextComponent],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss'
})
export class ProductSearchComponent {

}
