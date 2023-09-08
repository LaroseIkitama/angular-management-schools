import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GradeEditComponent } from './grade-edit.component';

describe('GradeEditComponent', () => {
  let component: GradeEditComponent;
  let fixture: ComponentFixture<GradeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GradeEditComponent]
    });
    fixture = TestBed.createComponent(GradeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
