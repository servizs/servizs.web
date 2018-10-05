import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRoot from '../../../store/reducers/index';
import * as fromTasker from '../../../tasker/store/reducer/index';
import * as fromSchedule from '../reducer/schedule.reducer';
import { ScheduleInfo } from './../../model/schedule.model';

export interface ScheduleState {
  scheduleInfo: fromSchedule.State;
}

export interface State extends fromRoot.AppState {
  schedule: ScheduleState;
  // schedule: ScheduleState;
}

export const reducers: ActionReducerMap<ScheduleState> = {
  scheduleInfo: fromSchedule.reducer
};

export const getScheduleState = createFeatureSelector<ScheduleState>('schedule');

export const getTaskerDetails = createSelector(
  fromTasker.getTaskerState,
  (state: fromTasker.TaskerState) => state.tasker.taskerDetails
);

export const getScheduleDetails = createSelector(getScheduleState, getTaskerDetails, (schedule, tasker) => {
  return <ScheduleInfo>{
    tasker: tasker,
    ...schedule.scheduleInfo.requestedSchedule
  };
});
/*
export const getScheduleState = createFeatureSelector<State, ScheduleState>('schedule');
export const getRequestScheduleState = createSelector(
  getScheduleState,
  (state: ScheduleState) => state.schedule.requestedSchedule
);*/
