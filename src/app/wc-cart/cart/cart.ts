import {Component} from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: false,
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {

  itemCount: number = 2579


  // checkbox----------
  isCheckbox = false

  clickCheckbox() {
    this.isCheckbox = !this.isCheckbox;
  }

  handleKeydown(event: KeyboardEvent) {
    if (event.key === ' ') {
      event.preventDefault();
      this.clickCheckbox();
    }
  }

  // checkbox----------

}
