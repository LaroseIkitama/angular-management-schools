import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserParametersViewPageComponent } from './user-parameters-view-page.component';

describe('UserParametersViewPageComponent', () => {
  let component: UserParametersViewPageComponent;
  let fixture: ComponentFixture<UserParametersViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserParametersViewPageComponent]
    });
    fixture = TestBed.createComponent(UserParametersViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
