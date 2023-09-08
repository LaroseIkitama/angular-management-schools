import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeEditViewPageComponent } from './grade-edit-view-page.component';

describe('GradeEditViewPageComponent', () => {
  let component: GradeEditViewPageComponent;
  let fixture: ComponentFixture<GradeEditViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradeEditViewPageComponent]
    });
    fixture = TestBed.createComponent(GradeEditViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
