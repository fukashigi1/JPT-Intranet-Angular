import { Component, input, InputSignal } from '@angular/core';
import { toastTypes } from '../../interfaces/toast.interface';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  public text: InputSignal<string> = input.required();
  public type: InputSignal<toastTypes> = input.required();
  public duration: InputSignal<number> = input(5);
  public closable: InputSignal<boolean> = input(true);
}
