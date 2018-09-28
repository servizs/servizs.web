import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchFacade } from '../search.facade';

@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {
  services$ = new Observable<any>();
  constructor(private readonly searchFacade: SearchFacade) {
    this.services$ = this.searchFacade.searchResult$;
  }

  ngOnInit() {}

  search(searchQuery: string) {
    this.searchFacade.findServices(searchQuery);
  }
}
