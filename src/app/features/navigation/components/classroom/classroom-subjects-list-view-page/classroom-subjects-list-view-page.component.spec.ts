import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomSubjectsListViewPageComponent } from './classroom-subjects-list-view-page.component';

describe('ClassroomSubjectsListViewPageComponent', () => {
  let component: ClassroomSubjectsListViewPageComponent;
  let fixture: ComponentFixture<ClassroomSubjectsListViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomSubjectsListViewPageComponent]
    });
    fixture = TestBed.createComponent(ClassroomSubjectsListViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
