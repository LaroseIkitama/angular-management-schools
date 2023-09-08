import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCreateViewPageComponent } from './student-create-view-page.component';

describe('StudentCreateViewPageComponent', () => {
  let component: StudentCreateViewPageComponent;
  let fixture: ComponentFixture<StudentCreateViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentCreateViewPageComponent]
    });
    fixture = TestBed.createComponent(StudentCreateViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
