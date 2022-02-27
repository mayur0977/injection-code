import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  constructor() { }

  display(textValue: string): void {
    console.log(`This is log message : ${textValue}`);
  }
}
