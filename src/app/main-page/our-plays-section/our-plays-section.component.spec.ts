import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurPlaysSectionComponent } from './our-plays-section.component';

describe('OurPlaysSectionComponent', () => {
  let component: OurPlaysSectionComponent;
  let fixture: ComponentFixture<OurPlaysSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurPlaysSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurPlaysSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
