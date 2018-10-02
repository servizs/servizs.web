import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Loading } from '../store/actions/layout.actions';
import * as layout from '../store/reducers/layout.reducer';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  isLoading$: Observable<any>;
  constructor(private store: Store<layout.State>) {
    this.isLoading$ = this.store.pipe(select(layout.getLoadingStatus));
  }

  ngOnInit() {
    this.store.dispatch(new Loading());
  }
}
