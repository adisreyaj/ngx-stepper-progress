import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  title = 'progress-stepper';
  stagesList = [
    {
      name: 'Resume Screening',
      count: 100,
    },
    {
      name: 'Contact',
      count: 56,
    },
    {
      name: 'Submission',
      count: 1,
    },
    {
      name: 'Interview',
      count: 1,
    },
    {
      name: 'Offered',
      count: 1,
    },
    {
      name: 'Hired',
      count: 0,
    },
  ];


  stageCompleted(stageId: number): boolean {
    try {
      if (this.stagesList[ stageId + 1 ].count > 0) {
        return true;
      } else {
        return false;
      }
    } catch {
      return false;
    }
  }
  nodeCompleted(stageId: number): boolean {
    try {
      if (this.stagesList[ stageId ].count > 0) {
        return true;
      } else {
        return false;
      }
    } catch {
      return false;
    }
  }
}
