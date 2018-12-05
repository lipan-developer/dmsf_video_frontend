import { TestBed } from '@angular/core/testing';

import { TelevisionService } from './television.service';

describe('TelevisionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TelevisionService = TestBed.get(TelevisionService);
    expect(service).toBeTruthy();
  });
});
