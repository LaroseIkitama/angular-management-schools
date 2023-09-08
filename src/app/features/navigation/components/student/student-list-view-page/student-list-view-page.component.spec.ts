import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentListViewPageComponent } from './student-list-view-page.component';

describe('StudentListViewPageComponent', () => {
  let component: StudentListViewPageComponent;
  let fixture: ComponentFixture<StudentListViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentListViewPageComponent]
    });
    fixture = TestBed.createComponent(StudentListViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
