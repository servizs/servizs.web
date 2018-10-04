import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookTasker, Tasker } from './../../model/tasker.model';

@Component({
  selector: 'app-confirm-tasker',
  templateUrl: './confirm-tasker.component.html',
  styleUrls: ['./confirm-tasker.component.css']
})
export class ConfirmTaskerComponent implements OnInit {
  @Input()
  tasker: Tasker;

  @Output()
  confirmTheRequestEvent = new EventEmitter<BookTasker>();

  scheduleForm: FormGroup;

  private timeRange: string[] = [];
  constructor(private formBuilder: FormBuilder) {
    this.populateTime();

    this.scheduleForm = this.formBuilder.group({
      hours: ['', [Validators.required]],
      costPerHour: [
        '',
        [
          Validators.required
          //Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
        ]
      ],
      workDate: [
        '',
        [
          Validators.required
          /*Validators.minLength(2), 
        Validators.min(18), 
        Validators.max(65)*/
        ]
      ],
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      unitNo: ['', []],
      streetNumber: ['', [Validators.required]],
      streetName: ['', [Validators.required]],
      city: ['', [Validators.required]],
      province: ['', [Validators.required]],
      country: ['', [Validators.required]],
      postalCode: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.email]],
      workDescription: ['', [Validators.required]],
      image1: ['', [Validators.required]],
      image2: ['', [Validators.required]]
    });
  }

  ngOnInit() {}

  populateTime() {
    let count = 7;
    while (count < 12) {
      this.timeRange.push(`${count} AM`);
      count++;
    }
    count = 0;
    while (count >= 1 && count < 8) {
      this.timeRange.push(`${count} PM`);
      count++;
    }
  }

  confirmTheService() {
    if (this.scheduleForm.invalid) {
      return;
    }

    const bookTasker: BookTasker = <BookTasker>this.scheduleForm.value;
    this.confirmTheRequestEvent.emit(bookTasker);
  }
}
