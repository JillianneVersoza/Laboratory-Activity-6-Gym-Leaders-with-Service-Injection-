import { Component, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leader-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './leader-info.html',
  styleUrl: './leader-info.css'
})
export class LeaderInfoComponent {
  leader = input<any>();
  isMottoVisible = signal(false);

  toggleMotto() {
    this.isMottoVisible.set(!this.isMottoVisible());
  }
}