import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  public stopwatchSeconds: number;
  public stopwatchMinutes: number;

  increaseStopwatch(): void {
    this.stopwatchSeconds += 1;
    if (this.stopwatchSeconds == 60) {
      this.stopwatchSeconds = 0;
      this.stopwatchMinutes += 1;
    }
  }

  startStopwatch(): void {
    setInterval(() => this.increaseStopwatch(), 1000);
  }

  reset(): void {
    window.location.reload();
  }

  ngOnInit(): void {
    this.stopwatchSeconds = 0;
    this.stopwatchMinutes = 0;
    this.startStopwatch();
  }
}
