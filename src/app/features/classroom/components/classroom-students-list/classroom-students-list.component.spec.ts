import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomStudentsListComponent } from './classroom-students-list.component';

describe('ClassroomStudentsListComponent', () => {
  let component: ClassroomStudentsListComponent;
  let fixture: ComponentFixture<ClassroomStudentsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomStudentsListComponent]
    });
    fixture = TestBed.createComponent(ClassroomStudentsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
