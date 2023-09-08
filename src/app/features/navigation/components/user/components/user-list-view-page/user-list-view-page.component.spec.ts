import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListViewPageComponent } from './user-list-view-page.component';

describe('UserListViewPageComponent', () => {
  let component: UserListViewPageComponent;
  let fixture: ComponentFixture<UserListViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserListViewPageComponent]
    });
    fixture = TestBed.createComponent(UserListViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
