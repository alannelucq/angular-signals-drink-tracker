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
}
