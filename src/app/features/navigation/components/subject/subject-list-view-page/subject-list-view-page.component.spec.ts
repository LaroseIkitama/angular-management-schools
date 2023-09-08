import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectListViewPageComponent } from './subject-list-view-page.component';

describe('SubjectListViewPageComponent', () => {
  let component: SubjectListViewPageComponent;
  let fixture: ComponentFixture<SubjectListViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubjectListViewPageComponent]
    });
    fixture = TestBed.createComponent(SubjectListViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
