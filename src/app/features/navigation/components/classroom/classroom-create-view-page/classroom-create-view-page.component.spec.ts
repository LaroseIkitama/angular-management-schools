import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomCreateViewPageComponent } from './classroom-create-view-page.component';

describe('ClassroomCreateViewPageComponent', () => {
  let component: ClassroomCreateViewPageComponent;
  let fixture: ComponentFixture<ClassroomCreateViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassroomCreateViewPageComponent]
    });
    fixture = TestBed.createComponent(ClassroomCreateViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
