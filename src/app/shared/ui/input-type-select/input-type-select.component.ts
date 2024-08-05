import { AfterViewInit, Component, ElementRef, input, OnChanges, Renderer2, signal, SimpleChanges, ViewChild, WritableSignal } from '@angular/core';
import { SelectItem } from '../../interfaces/select-item';
import { CommonModule } from '@angular/common';
import { ClickOutsideDirective } from '../../directives/click.outside.directive';

@Component({
  selector: 'input-type-select',
  standalone: true,
  imports: [CommonModule, ClickOutsideDirective],
  templateUrl: './input-type-select.component.html',
  styleUrl: './input-type-select.component.scss'
})
export class InputTypeSelectComponent implements AfterViewInit, OnChanges{
  public idInput = input<string>();
  public itemsSource = input<SelectItem[]>();
  public selectedItem = input<SelectItem>();
  public labelText = input<string>();
  public inputWidth = input<string>('auto');
  
  @ViewChild('inputWrapper') inputWrapper!: ElementRef;
  @ViewChild('dropDown') dropDown!: ElementRef;
  @ViewChild('inputElement') inputElement!: ElementRef;

  public SelectedItem: WritableSignal<SelectItem | undefined> = signal(undefined);
  public inputedText:WritableSignal<string> = signal('');
  public noResults: WritableSignal<boolean> = signal(false);
  public firstLoad: WritableSignal<boolean> = signal(true);
  
  constructor(private renderer: Renderer2){
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['selectedItem'] && changes['selectedItem'].currentValue) {
      this.SelectedItem.set(changes['selectedItem'].currentValue);
    }

  }


  isDropDownActive: WritableSignal<boolean> = signal<boolean>(false);

  public callCount: number = 0;
  private isZIndexZero: boolean = false;
  public toggleDropDown(): void {
    this.callCount++; 
    if (this.callCount > 1) {
      this.firstLoad.set(false); // Dejar de ejecutar después del segundo click
    }
   
    this.isDropDownActive.set(!this.isDropDownActive());
    this.toggleZIndex();
    this.inputElement.nativeElement.focus();
  }

  private toggleZIndex(): void {
    this.isZIndexZero = !this.isZIndexZero; // Alterna el valor de isZIndexZero
    
    if (!this.isDropDownActive()) {
      setTimeout(()=> {
        this.renderer.setStyle(this.dropDown.nativeElement, 'z-index', '-999');
      }, 200)
    } else {
      this.renderer.setStyle(this.dropDown.nativeElement, 'z-index', '0');
    }
  }

  public closeDropDown(): void {
    this.isDropDownActive.set(false);
    this.callCount = 0;
    this.firstLoad.set(true); 
    this.toggleZIndex();
  }

  public clickedOutside(): void {
    this.closeDropDown();
  }

  public selectOption(value: string, name: string): void {
    this.SelectedItem.set({value, name});
    this.inputedText.set(name);
    this.closeDropDown();
  }

  public inputDetected(): void {
    this.firstLoad.set(false);
    this.isDropDownActive.set(true);
    this.inputedText.set(this.inputElement.nativeElement.value);
    const itemsSource = this.itemsSource();
    let notFound = true;

    if (itemsSource) {
      for (let item of itemsSource) {
        if (item.name.includes(this.inputedText())){
          notFound = false;
          break
        } 
      }


    }
    this.noResults.set(notFound)
  }

  ngAfterViewInit(): void {


    const dropDownWidth = this.dropDown.nativeElement.offsetWidth;
    this.renderer.setStyle(this.inputWrapper.nativeElement, 'width', `${dropDownWidth + 20}px`);
    this.renderer.setStyle(this.dropDown.nativeElement, 'width', `${dropDownWidth}px`);
    this.inputedText.set(this.inputElement.nativeElement.value);

    
    const itemsSource = this.itemsSource()
    let notFound = true;
    if (itemsSource) {
      for (let item of itemsSource) {
        if (item.name.includes(this.inputedText())){
          notFound = false;
          break
        } 
      }


    }
    this.noResults.set(notFound)

  }
}
