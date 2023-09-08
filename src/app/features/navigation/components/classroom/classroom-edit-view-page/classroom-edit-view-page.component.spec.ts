import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomEditViewPageComponent } from './classroom-edit-view-page.component';

describe('ClassroomEditViewPageComponent', () => {
  let component: ClassroomEditViewPageComponent;
  let fixture: ComponentFixture<ClassroomEditViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomEditViewPageComponent]
    });
    fixture = TestBed.createComponent(ClassroomEditViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
