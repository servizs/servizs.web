import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { Tasker } from '../model/tasker.model';
import { TaskerFacade } from '../tasker.facade';

@Component({
  selector: 'app-tasker-detail-container',
  templateUrl: './tasker-detail-container.component.html',
  styleUrls: ['./tasker-detail-container.component.scss']
})
export class TaskerDetailContainerComponent implements OnInit, OnDestroy {
  private actionsSubscription: Subscription;
  tasker$: Observable<Tasker>;
  constructor(private route: ActivatedRoute, private taskerFacade: TaskerFacade) {
    this.tasker$ = this.taskerFacade.tasker$;
    this.actionsSubscription = this.route.params
      .pipe(map(params => this.taskerFacade.getTaskerDetails(params.userId)))
      .subscribe();
  }

  ngOnInit() {}
  ngOnDestroy() {
    this.actionsSubscription.unsubscribe();
  }
}
