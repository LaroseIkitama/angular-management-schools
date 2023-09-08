import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeCreateViewPageComponent } from './grade-create-view-page.component';

describe('GradeCreateViewPageComponent', () => {
  let component: GradeCreateViewPageComponent;
  let fixture: ComponentFixture<GradeCreateViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradeCreateViewPageComponent]
    });
    fixture = TestBed.createComponent(GradeCreateViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
