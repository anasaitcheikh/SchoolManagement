import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageTeacherComponent } from './message-teacher.component';

describe('MessageTeacherComponent', () => {
  let component: MessageTeacherComponent;
  let fixture: ComponentFixture<MessageTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
