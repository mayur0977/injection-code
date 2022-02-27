import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: null
})
export class SenderService {

  constructor(private _loggerService : LoggerService) { }

  sendMessage (message:string): string{
    this._loggerService.display(`testing from send message method @${message}@`)
    return message;
  }
}
