import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectCreateViewPageComponent } from './subject-create-view-page.component';

describe('SubjectCreateViewPageComponent', () => {
  let component: SubjectCreateViewPageComponent;
  let fixture: ComponentFixture<SubjectCreateViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectCreateViewPageComponent]
    });
    fixture = TestBed.createComponent(SubjectCreateViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
