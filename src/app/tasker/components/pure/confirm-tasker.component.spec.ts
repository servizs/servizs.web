import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTaskerComponent } from './confirm-tasker.component';

describe('ConfirmTaskerComponent', () => {
  let component: ConfirmTaskerComponent;
  let fixture: ComponentFixture<ConfirmTaskerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmTaskerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmTaskerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
