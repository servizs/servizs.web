import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

import * as fromSearch from './store/reducers/search.reducer';

@Injectable()
export class SearchService {
  constructor() {}

  getServices(query: string): Observable<fromSearch.Service[]> {
    return of([
      {
        taskrId: '123',
        taskrName: 'vipin',
        servicesOffered: ['Handy Man', 'TVMounting'],
        rating: 4,
        reviews: []
      },
      {
        taskrId: '1234',
        taskrName: 'vipin',
        servicesOffered: ['PLumping', 'TVMounting'],
        rating: 4,
        reviews: []
      }
    ]);
  }
}
