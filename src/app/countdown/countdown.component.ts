import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  targetDate: Date = new Date('2024-03-18T00:00:00'); 
  remainingDays: number=0;

  ngOnInit() {
    this.calculateTimeRemaining();
    setInterval(() => {
      this.calculateTimeRemaining();
    }, 1000); 
  }

  calculateTimeRemaining() {
    const now = new Date();
    const difference = this.targetDate.getTime() - now.getTime();
    this.remainingDays = Math.max(0, Math.floor(difference / (1000 * 60 * 60 * 24)));
  }
}
