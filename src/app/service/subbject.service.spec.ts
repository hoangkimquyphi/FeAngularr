import { TestBed } from '@angular/core/testing';

import { SubbjectService } from './subbject.service';

describe('SubbjectService', () => {
  let service: SubbjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubbjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
