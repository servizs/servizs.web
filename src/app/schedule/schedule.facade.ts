import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRoot from '../store/reducers/index';
import { Tasker } from './../tasker/model/tasker.model';
import { ScheduleInfo } from './model/schedule.model';
import * as fromSchedule from './store/reducer/index';

@Injectable()
export class ScheduleFacade {
  tasker$: Observable<Tasker>;
  constructor(private store: Store<fromRoot.AppState>) {
    // private taskerStore: Store<fromTasker.State>
    this.tasker$ = this.store.pipe(select(fromSchedule.getTaskerDetails));
  }

  confirmTheRequest(scheduleInfo: ScheduleInfo) {}
}
