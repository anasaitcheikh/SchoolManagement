import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterNotesComponent } from './enter-notes.component';

describe('EnterNotesComponent', () => {
  let component: EnterNotesComponent;
  let fixture: ComponentFixture<EnterNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
