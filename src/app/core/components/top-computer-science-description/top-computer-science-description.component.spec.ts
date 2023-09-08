import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopComputerScienceDescriptionComponent } from './top-computer-science-description.component';

describe('TopComputerScienceDescriptionComponent', () => {
  let component: TopComputerScienceDescriptionComponent;
  let fixture: ComponentFixture<TopComputerScienceDescriptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopComputerScienceDescriptionComponent]
    });
    fixture = TestBed.createComponent(TopComputerScienceDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
