import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeViewPageComponent } from './home-view-page.component';

describe('HomeViewPageComponent', () => {
  let component: HomeViewPageComponent;
  let fixture: ComponentFixture<HomeViewPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeViewPageComponent]
    });
    fixture = TestBed.createComponent(HomeViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
