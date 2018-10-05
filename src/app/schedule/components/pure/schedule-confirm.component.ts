import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ScheduleInfo } from '../../model/schedule.model';

@Component({
  selector: 'app-schedule-confirm',
  templateUrl: './schedule-confirm.component.html',
  styleUrls: ['./schedule-confirm.component.css']
})
export class ScheduleConfirmComponent implements OnInit {
  @Input()
  schedule: ScheduleInfo;

  @Output()
  confirmScheduleEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

  scheduleConfirmForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.scheduleConfirmForm = this.formBuilder.group({
      canProceed: [false, [Validators.required]]
    });
  }

  ngOnInit() {}

  confirmSchdule() {
    if (this.scheduleConfirmForm.invalid) {
      return;
    }

    this.confirmScheduleEvent.emit(true);
  }
}
