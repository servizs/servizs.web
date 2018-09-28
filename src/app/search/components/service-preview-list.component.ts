import { Service } from './../models/service.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-service-preview-list',
  template: `
  <app-service-preview *ngFor="let service of services" [service]="service"></app-service-preview>`,
  styleUrls: ['./service-preview-list.component.css']
})
export class ServicePreviewListComponent implements OnInit {
  @Input()
  services: Service[] = [];

  constructor() {}

  ngOnInit() {}
}
