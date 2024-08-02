import { Component, input } from '@angular/core';

@Component({
  selector: 'input-type-text',
  standalone: true,
  imports: [],
  templateUrl: './input-type-text.component.html',
  styleUrl: './input-type-text.component.scss'
})
export class InputTypeTextComponent {
  public id = input<string>();
  public labelText = input<string>();
  public inputWidth = input<string>('166px');
}
