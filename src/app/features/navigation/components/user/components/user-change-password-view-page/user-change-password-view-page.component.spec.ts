import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserChangePasswordViewPageComponent } from './user-change-password-view-page.component';

describe('UserChangePasswordViewPageComponent', () => {
  let component: UserChangePasswordViewPageComponent;
  let fixture: ComponentFixture<UserChangePasswordViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserChangePasswordViewPageComponent]
    });
    fixture = TestBed.createComponent(UserChangePasswordViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
