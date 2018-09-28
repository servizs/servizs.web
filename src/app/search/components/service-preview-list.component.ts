import { Component, OnInit, Input } from '@angular/core';
import * as fromSearch from '../store/reducers/search.reducer';

@Component({
  selector: 'app-service-preview-list',
  template: `
  <app-service-preview *ngFor="let service of services" [service]="service"></app-service-preview>`,
  styleUrls: ['./service-preview-list.component.css']
})
export class ServicePreviewListComponent implements OnInit {
  @Input()
  services: fromSearch.Service[] = [];

  constructor() {}

  ngOnInit() {}
}
