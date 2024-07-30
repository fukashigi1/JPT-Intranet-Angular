import { animate, style, transition, trigger } from '@angular/animations';
import { Component, Input, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  standalone: true,
  imports: [],
  templateUrl: './tooltip.component.html',
  styleUrl: './tooltip.component.scss',
  animations: [
    trigger('openClose', [
      transition(':enter', [
        style({opacity: 0}),
        animate('0.2s ease', style({opacity: 1}))
      ])
    ])
  ]
})

export class TooltipComponent {
  @Input() text = '';
  @Input() left = 0;
  @Input() top = 0;
}
