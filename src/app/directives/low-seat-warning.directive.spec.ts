/// <reference types="jasmine" />

import { ElementRef } from '@angular/core';
import { LowSeatWarningDirective } from './low-seat-warning.directive';

describe('LowSeatWarningDirective', () => {
  it('should create an instance', () => {
    const mockElement = new ElementRef(document.createElement('div'));

    const directive = new LowSeatWarningDirective(mockElement);

    expect(directive).toBeTruthy();
  });
});