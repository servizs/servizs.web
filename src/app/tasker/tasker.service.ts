import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Tasker } from './model/tasker.model';

@Injectable()
export class TaskerService {
  constructor() {}

  getTaskerDetails(userId: string): Observable<Tasker> {
    return of({
      userId: '1234',
      firstName: 'firsstName',
      lastName: 'lastName',
      location: 'location',
      services: ['HandlyMan', 'mounting'],
      picture: '',
      reviews: [
        {
          reviewerPicture: '',
          rating: 4,
          comment: 'Very Good'
        },
        {
          reviewerPicture: '',
          rating: 8,
          comment: 'Very Good'
        }
      ],
      rating: 3,
      badge: 'gold'
    });
  }
}
