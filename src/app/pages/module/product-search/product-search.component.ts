import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { InputTypeTextComponent } from '../../../shared/ui/input-type-text/input-type-text.component';
import { InputTypeSelectComponent } from '../../../shared/ui/input-type-select/input-type-select.component';
import { SelectItem } from '../../../shared/interfaces/select-item';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [InputTypeTextComponent, InputTypeSelectComponent, CommonModule],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
  animations: [
    trigger('expand-card', [
      transition(':enter', [
        style(
          {
            width: '250px',
            opacity: '0'
          }
        ),
        animate('0.2s ease-out', style(
          {
            width: '485px',
            opacity: '1'
          }
        )),
        animate('0.05s', style(
          {
            width: '476px',
            opacity: '1'
          }
        ))
      ])
    ]),
    trigger('expand-card-basic', [
      transition(':enter', [
        style(
          {
            width: '200px',
            opacity: '0'
          }
        ),
        animate('0.2s', style(
          {
            width: '250px',
            opacity: '1'
          }
        ))
      ])
    ]),
    trigger('fade-in', [
      transition(':enter', [
        style(
          {
            opacity: '0'
          }
        ),
        animate('0.5s', style(
          {
            opacity: '1'
          }
        ))
      ])
    ]),
    trigger('fade-out', [
      transition(':leave', [
        style(
          {
            opacity: '1'
          }
        ),
        animate('2s', style(
          {
            opacity: '0'
          }
        ))
      ])
    ])
  ]
})
export class ProductSearchComponent {
  
  public didSearch: WritableSignal<boolean> = signal(false);
  public hasLoaded: WritableSignal<boolean> = signal(false);
  public activeProductNavButton: WritableSignal<string> = signal('prices');
  

  public searchProduct(): void {
    this.didSearch.set(true);
    
    setTimeout(() => {
      this.hasLoaded.set(true);
    },5000);
  }

  public productNavClick(which: string):void {
    this.activeProductNavButton.set(which);
    console.log(this.activeProductNavButton())
  }
}
