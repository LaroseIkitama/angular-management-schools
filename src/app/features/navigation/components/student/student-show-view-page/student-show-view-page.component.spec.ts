import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentShowViewPageComponent } from './student-show-view-page.component';

describe('StudentShowViewPageComponent', () => {
  let component: StudentShowViewPageComponent;
  let fixture: ComponentFixture<StudentShowViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentShowViewPageComponent]
    });
    fixture = TestBed.createComponent(StudentShowViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
