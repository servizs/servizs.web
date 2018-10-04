import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookTasker, Tasker } from './../../model/tasker.model';
import { TaskerFacade } from './../../tasker.facade';

@Component({
  selector: 'app-confirm-tasker-container',
  templateUrl: './confirm-tasker-container.component.html',
  styleUrls: ['./confirm-tasker-container.component.css']
})
export class ConfirmTaskerContainerComponent implements OnInit {
  tasker$: Observable<Tasker>;
  constructor(private readonly taskerFacade: TaskerFacade) {
    this.tasker$ = this.taskerFacade.tasker$;
  }

  ngOnInit() {}

  confirmTheRequest(bookTasker: BookTasker) {
    this.taskerFacade.confirmTheRequest(bookTasker);
  }
}
