import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-carrossel',
  imports: [CommonModule],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.scss'
})
export class CarrosselComponent implements OnInit, OnDestroy {
  images = [
    'assets/images/background header 2.png',
    'assets/images/background header.png',
    'assets/images/background.jpg'
  ];
  activeIndex = 0;
  timerSubscription!: Subscription;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  startTimer() {
    this.timerSubscription = interval(5000).subscribe(() => {
      this.nextImage();
    });
  }

  nextImage() {
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
  }

  prevImage() {
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
  }
}
