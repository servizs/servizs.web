import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Tasker } from '../../../tasker/model/tasker.model';
import { ScheduleFacade } from './../../schedule.facade';

@Component({
  selector: 'app-schedule-details-container',
  templateUrl: './schedule-details-container.component.html',
  styleUrls: ['./schedule-details-container.component.css']
})
export class ScheduleDetailsContainerComponent implements OnInit {
  private actionsSubscription: Subscription;
  tasker$: Observable<Tasker>;
  constructor(private route: ActivatedRoute, private ScheduleFacade: ScheduleFacade) {
    this.tasker$ = this.ScheduleFacade.tasker$;
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}
