import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchFacade } from '../search.facade';
import * as moment from 'moment';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {
  services$ = new Observable<any>();
  private searchQuery = '';
  constructor(private readonly searchFacade: SearchFacade) {
    this.services$ = this.searchFacade.searchResult$;
  }

  ngOnInit() {}

  search(searchQuery: string) {
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
}
