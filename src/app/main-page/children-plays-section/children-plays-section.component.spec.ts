import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildrenPlaysSectionComponent } from './children-plays-section.component';

describe('ChildrenPlaysSectionComponent', () => {
  let component: ChildrenPlaysSectionComponent;
  let fixture: ComponentFixture<ChildrenPlaysSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildrenPlaysSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildrenPlaysSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
