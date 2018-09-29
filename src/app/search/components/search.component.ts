import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input()
  query = '';
  @Input()
  error = '';
  @Input()
  searching = false;

  @Output()
  search: EventEmitter<string> = new EventEmitter<string>();
  constructor() {}

  ngOnInit() {}

  searchService($event: KeyboardEvent) {
    this.search.emit(($event.currentTarget as HTMLInputElement).value);
  }
}
