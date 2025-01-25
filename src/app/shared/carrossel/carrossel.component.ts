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
    'assets/images/carrossel/carrossel-1.jpeg',
    'assets/images/carrossel/carrossel-2.jpeg',
    'assets/images/carrossel/carrossel-3.png'
  ];
  activeIndex = 0;
  timerSubscription!: Subscription;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  stopTimer(){
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  startTimer() {
    this.timerSubscription = interval(5000).subscribe(() => {
      this.activeIndex = (this.activeIndex + 1) % this.images.length;
    });
  }

  nextImage() {
    this.stopTimer();
    this.activeIndex = (this.activeIndex + 1) % this.images.length;
    setTimeout(()=>{
      this.startTimer()}, 5000
    )
  }

  prevImage() {
    this.stopTimer();
    this.activeIndex = (this.activeIndex - 1 + this.images.length) % this.images.length;
    setTimeout(()=>{
      this.startTimer()}, 5000
    )
  }
}
