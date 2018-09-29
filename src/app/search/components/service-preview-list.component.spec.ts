import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicePreviewListComponent } from './service-preview-list.component';

describe('ServicePreviewListComponent', () => {
  let component: ServicePreviewListComponent;
  let fixture: ComponentFixture<ServicePreviewListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServicePreviewListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicePreviewListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
