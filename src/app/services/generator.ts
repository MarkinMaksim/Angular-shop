import { forwardRef, Inject, Injectable } from '@angular/core';
import { genId } from './gen-id.generator';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {

  constructor(
    @Inject(forwardRef(() => genId)) public genIdService: genId
  ) { }

  generate(n: number): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var length = 0; length < n; length++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  getNewID(): number[] {
    return this.genIdService.generateId();
  }
}
