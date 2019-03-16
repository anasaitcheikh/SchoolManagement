import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimetableHeadmasterComponent } from './edit-timetable-headmaster.component';

describe('EditTimetableHeadmasterComponent', () => {
  let component: EditTimetableHeadmasterComponent;
  let fixture: ComponentFixture<EditTimetableHeadmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTimetableHeadmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTimetableHeadmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
