import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsSectionComponent } from './awards-section.component';

describe('AwardsSectionComponent', () => {
  let component: AwardsSectionComponent;
  let fixture: ComponentFixture<AwardsSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
