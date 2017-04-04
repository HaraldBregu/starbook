/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { JoinService } from './join.service';

describe('JoinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JoinService]
    });
  });

  it('should ...', inject([JoinService], (service: JoinService) => {
    expect(service).toBeTruthy();
  }));
});
