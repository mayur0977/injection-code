import { SenderService } from './../services/sender.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  constructor(private _senderService:SenderService) { }

  ngOnInit(): void {
  }

  sendMessage(){
    this._senderService.sendMessage("Hellw");
  }
}
