import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmTaskerContainerComponent } from './confirm-tasker-container.component';

describe('ConfirmTaskerContainerComponent', () => {
  let component: ConfirmTaskerContainerComponent;
  let fixture: ComponentFixture<ConfirmTaskerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmTaskerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmTaskerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
