import { Injectable, OnDestroy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fromRoot from '../store/reducers/index';
import { Tasker } from './../tasker/model/tasker.model';
import { ScheduleInfo } from './model/schedule.model';
import * as fromScheduleACtions from './store/actions/schedule.actions';
import * as fromSchedule from './store/reducer/index';

@Injectable()
export class ScheduleFacade implements OnDestroy {
  tasker$: Observable<Tasker>;
  schedule$: Observable<ScheduleInfo>;
  private unsubscribe: Subject<any> = new Subject<any>();
  constructor(private store: Store<fromRoot.AppState>) {
    this.tasker$ = this.store.pipe(
      takeUntil(this.unsubscribe),
      select(fromSchedule.getTaskerDetails)
    );
    this.schedule$ = this.store.pipe(select(fromSchedule.getScheduleDetails));
  }

  reviewAndconfirmTheSchedule(scheduleInfo: ScheduleInfo) {}
  scheduleAService(scheduleInfo) {
    this.store.dispatch(new fromScheduleACtions.ScheduleAService(scheduleInfo));
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
