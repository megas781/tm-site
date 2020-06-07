import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesSectionComponent } from './activities-section.component';

describe('ActivitiesSectionComponent', () => {
  let component: ActivitiesSectionComponent;
  let fixture: ComponentFixture<ActivitiesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivitiesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivitiesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
