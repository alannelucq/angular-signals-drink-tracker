import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Drink } from "./drink.enum";

const EMPTY_WATER_URL = 'https://cdn-icons-png.flaticon.com/512/3100/3100553.png';
const FILLED_WATER_URL = 'https://cdn-icons-png.flaticon.com/512/3100/3100566.png';
const EMPTY_COFFEE_URL = 'https://cdn-icons-png.flaticon.com/512/924/924412.png';
const FILLED_COFFEE_URL = 'https://cdn-icons-png.flaticon.com/512/924/924514.png';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Drink = Drink;
  indexes = [0, 1, 2, 3, 4];
  quantity = signal(2);
  type = signal(Drink.Water);
  emptyImageUrl = computed(() => this.type() === Drink.Water ? EMPTY_WATER_URL : EMPTY_COFFEE_URL);
  filledImageUrl = computed(() => this.type() === Drink.Water ? FILLED_WATER_URL : FILLED_COFFEE_URL);

  decrement() {
    this.quantity.update(quantity => quantity ? quantity - 1 : 0);
  }

  increment() {
    this.quantity.update(quantity => quantity < this.indexes.length ? quantity + 1 : this.indexes.length);
  }
}
