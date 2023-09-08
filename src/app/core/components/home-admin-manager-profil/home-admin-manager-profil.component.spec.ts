import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAdminManagerProfilComponent } from './home-admin-manager-profil.component';

describe('HomeAdminManagerProfilComponent', () => {
  let component: HomeAdminManagerProfilComponent;
  let fixture: ComponentFixture<HomeAdminManagerProfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAdminManagerProfilComponent]
    });
    fixture = TestBed.createComponent(HomeAdminManagerProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
