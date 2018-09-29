import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { URL } from './../shared/config';
import { DataService } from './../shared/data-service';
import { Service, ServiceFilter } from './models/service.model';

declare const google: any;
@Injectable()
export class SearchService {
  constructor(private readonly dataService: DataService) {}

  getServices(filter: ServiceFilter): Observable<Service[]> {
    return of([
      {
        userId: '123',
        taskerName: 'vipin',
        servicesOffered: ['Handy Man', 'TVMounting'],
        rating: 4,
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
        badge: 'Gold',
        picture: '',
        profileSummary: 'I am a handy man',
        Location: 'Brampton'
      },
      {
        userId: '1234',
        taskerName: 'vipin',
        servicesOffered: ['PLumping', 'TVMounting'],
        rating: 4,
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
        badge: 'Gold',
        picture: '',
        profileSummary: 'I am a handy man',
        Location: 'Brampton'
      }
    ]);
  }

  getUserLocation(geoCode: any): Observable<string[]> {
    const url = URL.geoCodingApi.replace('{latlang}', `${geoCode.lat},${geoCode.lng}`);
    return this.dataService.get(url).pipe(
      filter(p => p.status === 'OK'),
      map(response => response.results[0].address_components),
      map(addressComponents =>
        addressComponents.filter(
          part =>
            part.types.indexOf('locality') !== -1 ||
            part.types.indexOf('administrative_area_level_1') !== -1 ||
            part.types.indexOf('postal_code') !== -1
        )
      ),
      map(address => {
        let response = [];
        response = address.reduce((prev, next) => {
          response.push(next.long_name);
          return response;
        }, response);

        return response;
      })
    );
  }
}
