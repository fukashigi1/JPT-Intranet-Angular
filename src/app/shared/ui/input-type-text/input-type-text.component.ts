import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'input-type-text',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-type-text.component.html',
  styleUrl: './input-type-text.component.scss'
})
export class InputTypeTextComponent {
  public idInput = input<string>();
  public labelText = input<string>();
  public inputWidth = input<string>('auto');

  

}
