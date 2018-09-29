import { AppState } from './../../store/reducers/index';
import * as layout from '../store/reducers/layout.reducer';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Loading } from '../store/actions/layout.actions';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
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
