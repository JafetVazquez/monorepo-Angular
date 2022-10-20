import { TestBed } from '@angular/core/testing';

import { MiniCRUDService } from './mini-crud.service';

describe('MiniCRUDService', () => {
  let service: MiniCRUDService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiniCRUDService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
