import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageHeadmasterComponent } from './message-headmaster.component';

describe('MessageHeadmasterComponent', () => {
  let component: MessageHeadmasterComponent;
  let fixture: ComponentFixture<MessageHeadmasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageHeadmasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageHeadmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
