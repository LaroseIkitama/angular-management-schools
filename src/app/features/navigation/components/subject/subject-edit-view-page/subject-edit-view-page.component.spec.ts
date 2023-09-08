import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectEditViewPageComponent } from './subject-edit-view-page.component';

describe('SubjectEditViewPageComponent', () => {
  let component: SubjectEditViewPageComponent;
  let fixture: ComponentFixture<SubjectEditViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectEditViewPageComponent]
    });
    fixture = TestBed.createComponent(SubjectEditViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
