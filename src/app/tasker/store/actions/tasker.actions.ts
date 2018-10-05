import { Action } from '@ngrx/store';
export enum TaskerActionsTypes {
  ViewTaskerDetails = '[TASKER] View Tasker Details',
  ViewTaskerDetailsCompleted = '[TASKER] View Tasker Details Completed',
  ViewTaskerDetailsFailed = '[TASKER] View Tasker Details Failed',
  SelectTasker = '[TASKER] SelectTasker'
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

export class SelectTasker implements Action {
  readonly type = TaskerActionsTypes.SelectTasker;
  constructor(public userId: string) {}
}

export type TaskerActions = ViewTaskerDetails | ViewTaskerDetailsCompleted | ViewTaskerDetailsFailed | SelectTasker;
