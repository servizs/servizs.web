import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Tasker } from './model/tasker.model';
import * as fromTaskerActions from './store/actions/tasker.actions';
import * as fromTasker from './store/reducer/index';
import { TaskerService } from './tasker.service';

@Injectable()
export class TaskerFacade {
  tasker$: Observable<Tasker>;
  constructor(private taskerSevice: TaskerService, private store: Store<fromTasker.State>) {
    this.tasker$ = this.store.pipe(select(fromTasker.getTaskerDetails));
  }

  getTaskerDetails(userId: string): void {
    this.store.dispatch(new fromTaskerActions.ViewTaskerDetails(userId));
  }
}
