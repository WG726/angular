import { Component } from '@angular/core';
import { GradePipe } from './grade.pipe';
import { CommonModule } from '@angular/common';
import { GradeDirective } from './grade.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [GradePipe, CommonModule, GradeDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "practice-app";
  btnText = "Subscribe";
  isSubscribed = false;
  marks = [97, 68, 83, 29, 75];

  subscribe() {
    setTimeout(() => { // this setTimeout is representing an API call with its timing
      this.isSubscribed = true;
      this.btnText = "Subscribed";
    }, 3000);
  }
}
