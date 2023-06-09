import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  indexes = [0, 1, 2, 3, 4];
  emptyImageUrl = 'https://cdn-icons-png.flaticon.com/512/3100/3100553.png';
  filledImageUrl = 'https://cdn-icons-png.flaticon.com/512/3100/3100566.png';
  quantity = signal(2);

  decrement() {
    this.quantity.update(quantity => quantity ? quantity - 1 : 0);
  }

  increment() {
    this.quantity.update(quantity => quantity < this.indexes.length ? quantity + 1 : this.indexes.length);
  }
}
