import { ApiService } from './../services/api.service';
import { SenderService } from './../services/sender.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.scss']
})
export class OneComponent implements OnInit {

  public joke: any;
  constructor(private _senderService:SenderService,private _apiService: ApiService) {
    this.joke =null;
   }

  ngOnInit(): void {
  }

  sendMessage(){
    this._senderService.sendMessage("Hellw");
  }

  getOtherData() {
    this._apiService.getOtherData()
      .subscribe(data => {this.joke = data;
      console.log("another Data",data)
      });
  }
}
