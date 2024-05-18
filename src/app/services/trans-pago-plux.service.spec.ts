import { TestBed } from '@angular/core/testing';

import { TransPagoPluxService } from './trans-pago-plux.service';

describe('TransPagoPluxService', () => {
  let service: TransPagoPluxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransPagoPluxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
