import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGradesListViewPageComponent } from './student-grades-list-view-page.component';

describe('StudentGradesListViewPageComponent', () => {
  let component: StudentGradesListViewPageComponent;
  let fixture: ComponentFixture<StudentGradesListViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentGradesListViewPageComponent]
    });
    fixture = TestBed.createComponent(StudentGradesListViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
