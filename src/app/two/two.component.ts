import { ApiService, ApiResponse } from './../services/api.service';
import { RecieverService } from './../services/reciever.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  public joke: ApiResponse;
  constructor(private _recieverService: RecieverService, private _apiService: ApiService) {

    this.joke = { icon_url: '', id: '', url: '', value: '' };
  }
  ngOnInit(): void {
    console.log("this.joke",this.joke);
    
  }


  alertMe() {
    this._recieverService.recivedMessage("this is alert text");
  }
  getData() {
    this._apiService.getData()
      .subscribe(data =>  {this.joke = data;
        console.log("Data",data)
        });
  }

}
