import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskerDetailContainerComponent } from './tasker-detail-container.component';

describe('TaskerDetailContainerComponent', () => {
  let component: TaskerDetailContainerComponent;
  let fixture: ComponentFixture<TaskerDetailContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskerDetailContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskerDetailContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
