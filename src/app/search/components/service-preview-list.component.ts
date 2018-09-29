import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Service } from './../models/service.model';

@Component({
  selector: 'app-service-preview-list',
  template: `
  <app-service-preview *ngFor="let service of services" [service]="service" 
    (viewTaskerDetails)="viewTaskerDetails.emit($event)"></app-service-preview>`,
  styleUrls: ['./service-preview-list.component.css']
})
export class ServicePreviewListComponent implements OnInit {
  @Input()
  services: Service[] = [];

  @Output()
  viewTaskerDetails: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
