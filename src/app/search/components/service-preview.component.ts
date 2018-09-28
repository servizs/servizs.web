import { Component, OnInit, Input } from '@angular/core';

import * as fromSearch from '../store/reducers/search.reducer';
@Component({
  selector: 'app-service-preview',
  templateUrl: './service-preview.component.html',
  styleUrls: ['./service-preview.component.css']
})
export class ServicePreviewComponent implements OnInit {
  @Input()
  service: fromSearch.Service;
  constructor() {}

  ngOnInit() {}
}
