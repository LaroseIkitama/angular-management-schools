import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCreateViewPageComponent } from './user-create-view-page.component';

describe('UserCreateViewPageComponent', () => {
  let component: UserCreateViewPageComponent;
  let fixture: ComponentFixture<UserCreateViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserCreateViewPageComponent]
    });
    fixture = TestBed.createComponent(UserCreateViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
