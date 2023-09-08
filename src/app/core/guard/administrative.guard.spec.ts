import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { administrativeGuard } from './administrative.guard';

describe('administrativeGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => administrativeGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
