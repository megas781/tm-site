import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YouCanSectionComponent } from './you-can-section.component';

describe('YouCanSectionComponent', () => {
  let component: YouCanSectionComponent;
  let fixture: ComponentFixture<YouCanSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YouCanSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YouCanSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
