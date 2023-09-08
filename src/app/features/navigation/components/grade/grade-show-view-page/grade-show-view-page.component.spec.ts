import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeShowViewPageComponent } from './grade-show-view-page.component';

describe('GradeShowViewPageComponent', () => {
  let component: GradeShowViewPageComponent;
  let fixture: ComponentFixture<GradeShowViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradeShowViewPageComponent]
    });
    fixture = TestBed.createComponent(GradeShowViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
