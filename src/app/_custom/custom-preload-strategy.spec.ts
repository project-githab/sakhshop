import { TestBed } from '@angular/core/testing';

import { CustomPreloadStrategy } from './custom-preload-strategy';

describe('CustomPreloadStrategy', () => {
  let service: CustomPreloadStrategy;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPreloadStrategy);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
