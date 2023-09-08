import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectAddToClassroomComponent } from './subject-add-to-classroom.component';

describe('SubjectAddToClassroomComponent', () => {
  let component: SubjectAddToClassroomComponent;
  let fixture: ComponentFixture<SubjectAddToClassroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectAddToClassroomComponent]
    });
    fixture = TestBed.createComponent(SubjectAddToClassroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
