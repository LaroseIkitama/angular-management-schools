import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomListViewPageComponent } from './classroom-list-view-page.component';

describe('ClassroomListViewPageComponent', () => {
  let component: ClassroomListViewPageComponent;
  let fixture: ComponentFixture<ClassroomListViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomListViewPageComponent]
    });
    fixture = TestBed.createComponent(ClassroomListViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
