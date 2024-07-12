import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Phone } from '../phones-list/Phone';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {
  @Input()
  quantity: number = 0;

  @Input()
  max: number = 0;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  upQuantity(): void {
    if (this.quantity < this.max) {
      this.quantity++
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity(): void {
    if (this.quantity > 0) {
      this.quantity--
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event: KeyboardEvent):void{
      this.quantityChange.emit(this.quantity);
  }
}
