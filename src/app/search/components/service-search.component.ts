import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-search',
  templateUrl: './service-search.component.html',
  styleUrls: ['./service-search.component.css']
})
export class ServiceSearchComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  search(searchQuery: string) {
    // this.store.dispatch(new BookActions.Search(query));
  }
}
