import { Service } from './../models/service.model';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-service-preview',
  templateUrl: './service-preview.component.html',
  styleUrls: ['./service-preview.component.css']
})
export class ServicePreviewComponent implements OnInit {
  @Input()
  service: Service;
  constructor() {}

  ngOnInit() {}
}
