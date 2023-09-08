import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportCardViewPageComponent } from './report-card-view-page.component';

describe('ReportCardViewPageComponent', () => {
  let component: ReportCardViewPageComponent;
  let fixture: ComponentFixture<ReportCardViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportCardViewPageComponent]
    });
    fixture = TestBed.createComponent(ReportCardViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
