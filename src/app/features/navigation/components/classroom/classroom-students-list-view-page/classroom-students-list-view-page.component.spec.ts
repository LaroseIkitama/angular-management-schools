import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomStudentsListViewPageComponent } from './classroom-students-list-view-page.component';

describe('ClassroomStudentsListViewPageComponent', () => {
  let component: ClassroomStudentsListViewPageComponent;
  let fixture: ComponentFixture<ClassroomStudentsListViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomStudentsListViewPageComponent]
    });
    fixture = TestBed.createComponent(ClassroomStudentsListViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
