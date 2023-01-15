import { Injectable, InjectionToken } from '@angular/core';
import { GeneratorService } from './generator';

export const generatedString = new InjectionToken<string>('generatedString');

export function GeneratorFactory(n: number) {
  return function(generator: GeneratorService): string {
    return generator.generate(n);
  }
}
