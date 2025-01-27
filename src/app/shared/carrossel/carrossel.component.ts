import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-carrossel',
  imports: [CommonModule],
  templateUrl: './carrossel.component.html',
  styleUrl: './carrossel.component.scss'
})
export class CarrosselComponent implements OnInit, OnDestroy {

  @Input() paths!: string[];
  
  activeIndex = 0;
  timerSubscription!: Subscription;

  ngOnInit() {
    this.startTimer(5000);
  }

  ngOnDestroy() {
    this.stopTimer();
  }

  stopTimer(){
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  startTimer(time: number) {
    this.timerSubscription = interval(time).subscribe(() => {
      this.activeIndex = (this.activeIndex + 1) % this.paths.length;
    });
  }

  nextImage() {
    this.stopTimer();
    this.activeIndex = (this.activeIndex + 1) % this.paths.length;
    this.startTimer(5000);
  }

  prevImage() {
    this.stopTimer();
    this.activeIndex = (this.activeIndex - 1 + this.paths.length) % this.paths.length;
    this.startTimer(5000);
  }
}
