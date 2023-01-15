import { Injectable } from '@angular/core';
import { generateId } from './gen-id.generator';

@Injectable({
  providedIn: 'root',
})
export class GeneratorService {

  constructor(
  ) { }

  generate(n: number): string {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var length = 0; length < n; length++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  getNewID(): number[] {
    return generateId();
  }
}
