import { Service, ServiceFilter } from './models/service.model';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchService {
  constructor() {}

  getServices(filter: ServiceFilter): Observable<Service[]> {
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
