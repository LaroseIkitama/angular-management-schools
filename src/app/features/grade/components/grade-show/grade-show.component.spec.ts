import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeShowComponent } from './grade-show.component';

describe('GradeShowComponent', () => {
  let component: GradeShowComponent;
  let fixture: ComponentFixture<GradeShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradeShowComponent]
    });
    fixture = TestBed.createComponent(GradeShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
