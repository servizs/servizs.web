import { AppState } from './../../app-state';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { skip } from 'rxjs/operators';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {
  searchResult$ = new Observable<any>();
  constructor() {
    // this.searchResult$ = this.store.pipe(skip(1));
  }

  ngOnInit() {}

  search(searchQuery) {
    // TODO : Dispatch 2 events - Global State Loading event
    // Search the query text in backend.
  }
}
