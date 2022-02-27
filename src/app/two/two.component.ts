import { RecieverService } from './../services/reciever.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.scss']
})
export class TwoComponent implements OnInit {

  constructor(private _recieverService:RecieverService) { }

  ngOnInit(): void {
    
  }


  alertMe(){
    this._recieverService.recivedMessage("this is alert text");
  }

}
