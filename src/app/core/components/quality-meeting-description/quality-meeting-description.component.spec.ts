import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualityMeetingDescriptionComponent } from './quality-meeting-description.component';

describe('QualityMeetingDescriptionComponent', () => {
  let component: QualityMeetingDescriptionComponent;
  let fixture: ComponentFixture<QualityMeetingDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QualityMeetingDescriptionComponent]
    });
    fixture = TestBed.createComponent(QualityMeetingDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
