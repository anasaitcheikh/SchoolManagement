import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-headmaster',
  templateUrl: './message-headmaster.component.html',
  styleUrls: ['./message-headmaster.component.scss']
})
export class MessageHeadmasterComponent implements OnInit {
  email : string;
  object : string;
  msg : string;
  
  constructor() { }

  ngOnInit() {
  }
  
  send(){
    console.log(this.email);
    console.log(this.object);
    console.log(this.msg);
  }



}
