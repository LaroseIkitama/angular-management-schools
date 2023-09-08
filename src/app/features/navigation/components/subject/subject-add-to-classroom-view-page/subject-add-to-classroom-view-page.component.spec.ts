import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAddToClassroomViewPageComponent } from './subject-add-to-classroom-view-page.component';

describe('SubjectAddToClassroomViewPageComponent', () => {
  let component: SubjectAddToClassroomViewPageComponent;
  let fixture: ComponentFixture<SubjectAddToClassroomViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectAddToClassroomViewPageComponent]
    });
    fixture = TestBed.createComponent(SubjectAddToClassroomViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
