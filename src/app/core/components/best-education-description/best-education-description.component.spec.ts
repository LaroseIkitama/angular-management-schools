import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestEducationDescriptionComponent } from './best-education-description.component';

describe('BestEducationDescriptionComponent', () => {
  let component: BestEducationDescriptionComponent;
  let fixture: ComponentFixture<BestEducationDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BestEducationDescriptionComponent]
    });
    fixture = TestBed.createComponent(BestEducationDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
