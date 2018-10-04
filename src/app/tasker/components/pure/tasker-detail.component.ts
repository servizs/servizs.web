import { Component, Input, OnInit } from '@angular/core';
import { Tasker } from '../../model/tasker.model';

@Component({
  selector: 'app-tasker-detail',
  templateUrl: './tasker-detail.component.html',
  styleUrls: ['./tasker-detail.component.scss']
})
export class TaskerDetailComponent implements OnInit {
  @Input()
  tasker: Tasker;
  constructor() {}

  ngOnInit() {}
}
