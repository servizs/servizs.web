import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../store/reducers/index';
import { Tasker } from './../tasker/model/tasker.model';
import { ScheduleInfo } from './model/schedule.model';
import * as fromScheduleACtions from './store/actions/schedule.actions';
import * as fromSchedule from './store/reducer/index';

@Injectable()
export class ScheduleFacade {
  tasker$: Observable<Tasker>;
  constructor(private store: Store<fromRoot.AppState>) {
    this.tasker$ = this.store.pipe(select(fromSchedule.getTaskerDetails));
  }

  reviewAndconfirmTheSchedule(scheduleInfo: ScheduleInfo) {}
  scheduleAService(scheduleInfo) {
    this.store.dispatch(new fromScheduleACtions.ScheduleAService(scheduleInfo));
  }
}
