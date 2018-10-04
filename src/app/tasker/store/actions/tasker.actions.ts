import { Action } from '@ngrx/store';
import { BookTasker } from './../../model/tasker.model';
export enum TaskerActionsTypes {
  ViewTaskerDetails = '[TASKER] View Tasker Details',
  ViewTaskerDetailsCompleted = '[TASKER] View Tasker Details Completed',
  ViewTaskerDetailsFailed = '[TASKER] View Tasker Details Failed'
}

export enum ScheduleActionTyes {
  ScheduleAService = '[BOOK] Schedule a service'
}

export class ViewTaskerDetails implements Action {
  readonly type = TaskerActionsTypes.ViewTaskerDetails;
  constructor(public userId: string) {}
}

export class ViewTaskerDetailsCompleted implements Action {
  readonly type = TaskerActionsTypes.ViewTaskerDetailsCompleted;
  constructor(public tasker: any) {}
}

export class ViewTaskerDetailsFailed implements Action {
  readonly type = TaskerActionsTypes.ViewTaskerDetailsFailed;
  constructor(public error: any) {}
}

export class ScheduleAService implements Action {
  readonly type = ScheduleActionTyes.ScheduleAService;
  constructor(public bookTasker: BookTasker) {}
}

export type ScheduleActions = ScheduleAService;
export type TaskerActions = ViewTaskerDetails | ViewTaskerDetailsCompleted | ViewTaskerDetailsFailed;
