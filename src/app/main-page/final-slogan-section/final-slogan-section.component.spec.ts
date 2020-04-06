import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalSloganSectionComponent } from './final-slogan-section.component';

describe('FinalSloganSectionComponent', () => {
  let component: FinalSloganSectionComponent;
  let fixture: ComponentFixture<FinalSloganSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalSloganSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalSloganSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
