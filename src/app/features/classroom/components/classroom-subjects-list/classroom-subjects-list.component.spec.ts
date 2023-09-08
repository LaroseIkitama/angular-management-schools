import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomSubjectsListComponent } from './classroom-subjects-list.component';

describe('ClassroomSubjectsListComponent', () => {
  let component: ClassroomSubjectsListComponent;
  let fixture: ComponentFixture<ClassroomSubjectsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomSubjectsListComponent]
    });
    fixture = TestBed.createComponent(ClassroomSubjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
