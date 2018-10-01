import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Observable, of } from 'rxjs';
import { SearchFacade } from '../search.facade';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {
  services$ = new Observable<any>();
  userLocation$: Observable<any>;
  canHide = true;
  private searchQuery = '';
  private geoLocation: any = {};
  constructor(private readonly searchFacade: SearchFacade, private router: Router) {
    this.services$ = this.searchFacade.searchResult$;
    this.userLocation$ = this.searchFacade.userLocation$;
    this.getGeoLocation();
  }

  ngOnInit() {}

  search(searchQuery: string) {
    this.canHide = false;
    this.searchQuery = searchQuery;
    this.searchFacade.findServices({
      query: searchQuery,
      // First 7 days to search to begin with.
      startDate: moment().format('MMM/DD/YY'),
      endDate: moment()
        .add(7, 'days')
        .format('MMM/DD/YY'),
      city: 'Brampton',
      country: 'Canada'
    });
  }

  dateSelected(dateRange: any) {
    this.searchFacade.findServices({ ...dateRange, query: this.searchQuery });
  }

  viewTaskerDetails(userId: string) {
    // TODO: Need to dispatch view user details. where to do it?
    this.router.navigate(['/tasker', userId]);
  }

  private getGeoLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.geoLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        of(this.geoLocation).subscribe(geoCodes => this.searchFacade.findUserLocation(geoCodes));
      });
    }
  }
}
