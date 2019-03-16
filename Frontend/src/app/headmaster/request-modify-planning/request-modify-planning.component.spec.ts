import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestModifyPlanningComponent } from './request-modify-planning.component';

describe('RequestModifyPlanningComponent', () => {
  let component: RequestModifyPlanningComponent;
  let fixture: ComponentFixture<RequestModifyPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestModifyPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestModifyPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
