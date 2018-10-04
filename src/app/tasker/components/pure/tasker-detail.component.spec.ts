import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskerDetailComponent } from './tasker-detail.component';

describe('TaskerDetailComponent', () => {
  let component: TaskerDetailComponent;
  let fixture: ComponentFixture<TaskerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
