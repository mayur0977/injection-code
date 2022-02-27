import { LoggerService } from './logger.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecieverService {

  constructor(private _loggerService : LoggerService) { }

  recivedMessage(msg:string):void{
    this._loggerService.display(`testing from recieve message method @${msg}@`)
      alert("message recivied :"+msg )
  }
}
