import { TestBed } from '@angular/core/testing';

import { HoennData } from './hoenn-data';

describe('HoennData', () => {
  let service: HoennData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoennData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
