import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeListViewPageComponent } from './grade-list-view-page.component';

describe('GradeListViewPageComponent', () => {
  let component: GradeListViewPageComponent;
  let fixture: ComponentFixture<GradeListViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradeListViewPageComponent]
    });
    fixture = TestBed.createComponent(GradeListViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
