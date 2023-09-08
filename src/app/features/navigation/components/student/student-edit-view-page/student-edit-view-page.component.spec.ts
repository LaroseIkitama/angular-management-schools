import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEditViewPageComponent } from './student-edit-view-page.component';

describe('StudentEditViewPageComponent', () => {
  let component: StudentEditViewPageComponent;
  let fixture: ComponentFixture<StudentEditViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentEditViewPageComponent]
    });
    fixture = TestBed.createComponent(StudentEditViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
