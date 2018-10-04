import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Tasker } from '../../../tasker/model/tasker.model';
import { ScheduleInfo } from '../../model/schedule.model';
import { ScheduleFacade } from './../../schedule.facade';

@Component({
  selector: 'app-schedule-details-container',
  templateUrl: './schedule-details-container.component.html',
  styleUrls: ['./schedule-details-container.component.css']
})
export class ScheduleDetailsContainerComponent implements OnInit {
  private actionsSubscription: Subscription;
  tasker$: Observable<Tasker>;
  constructor(private route: ActivatedRoute, private ScheduleFacade: ScheduleFacade, private router: Router) {
    this.tasker$ = this.ScheduleFacade.tasker$;
  }

  ngOnInit() {}
  ngOnDestroy() {}

  confirmTheRequest(scheduleInfo: ScheduleInfo) {
    this.ScheduleFacade.scheduleAService(scheduleInfo);
    this.router.navigate(['/confirm']);
  }
}
