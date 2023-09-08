import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGradesListComponent } from './student-grades-list.component';

describe('StudentGradesListComponent', () => {
  let component: StudentGradesListComponent;
  let fixture: ComponentFixture<StudentGradesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentGradesListComponent]
    });
    fixture = TestBed.createComponent(StudentGradesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
