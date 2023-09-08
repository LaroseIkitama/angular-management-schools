import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditViewPageComponent } from './user-edit-view-page.component';

describe('UserEditViewPageComponent', () => {
  let component: UserEditViewPageComponent;
  let fixture: ComponentFixture<UserEditViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserEditViewPageComponent]
    });
    fixture = TestBed.createComponent(UserEditViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
