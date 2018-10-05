import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ScheduleInfo } from '../../model/schedule.model';
import { ScheduleFacade } from './../../schedule.facade';

@Component({
  selector: 'app-schedule-confirm-container',
  templateUrl: './schedule-confirm-container.component.html',
  styleUrls: ['./schedule-confirm-container.component.css']
})
export class ScheduleConfirmContainerComponent implements OnInit {
  schedule$: Observable<ScheduleInfo>;
  constructor(private readonly scheduleFacade: ScheduleFacade, private router: Router) {
    this.schedule$ = this.scheduleFacade.schedule$;
  }

  ngOnInit() {}

  confirmSchedule() {
    this.router.navigate(['/payment']);
  }
}
