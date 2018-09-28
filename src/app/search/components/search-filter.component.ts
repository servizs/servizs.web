import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent implements OnInit {
  @Output()
  dateSelected = new EventEmitter<{}>();
  dateRanges: string[] = [];
  private count = 0;
  constructor() {
    this.dateRanges.push(moment().format('MMM/DD/YY'));
    for (let i = 1; i < 6; i++) {
      this.count++;
      this.dateRanges.push(
        moment()
          .add(i, 'days')
          .format('MMM/DD/YY')
      );
    }
  }

  ngOnInit() {}
  selectDate(date: string) {
    this.dateSelected.emit({ startDate: date, endDate: date });
  }

  prevWeek() {
    // TODO: its borken. need to fix.
    this.dateRanges = [];
    const startCount = this.count;
    for (let i = startCount; i > startCount - 7; i--) {
      this.count--;
      this.dateRanges.push(
        moment()
          .subtract(i, 'days')
          .format('MMM/DD/YY')
      );
    }
  }
  nextWeek() {
    this.dateRanges = [];
    const startCount = this.count;
    for (let i = startCount; i < startCount + 7; i++) {
      this.count++;
      this.dateRanges.push(
        moment()
          .add(i, 'days')
          .format('MMM/DD/YY')
      );
    }

    this.dateSelected.emit({
      startDate: this.dateRanges[0],
      endDate: this.dateRanges[this.dateRanges.length - 1]
    });
  }
}
