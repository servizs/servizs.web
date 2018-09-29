import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Service } from './../models/service.model';
@Component({
  selector: 'app-service-preview',
  templateUrl: './service-preview.component.html',
  styleUrls: ['./service-preview.component.css']
})
export class ServicePreviewComponent implements OnInit {
  @Input()
  service: Service;

  @Output()
  viewTaskerDetails: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}
}
