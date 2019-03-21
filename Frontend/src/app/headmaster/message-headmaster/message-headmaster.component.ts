import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
import {HeadmasterService} from '../../../services/headmaster.service';

@Component({
  selector: 'app-message-headmaster',
  templateUrl: './message-headmaster.component.html',
  styleUrls: ['./message-headmaster.component.scss']
})
export class MessageHeadmasterComponent implements OnInit {
  //-----------send-----------
  email;
  object;
  msg;
  sender;
//--------------receive---------
  messages;
  contenu;
//-----------------------------

  constructor(private LoginService: LoginService, private router: Router, private HeadmasterService: HeadmasterService) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.sender = JSON.parse(localStorage.getItem('user'));
    this.messages= JSON.parse(JSON.stringify(this.HeadmasterService.getMessages()));
    this.contenu="";
  }
  
  send(){
    this.HeadmasterService.sendMessage(this.sender.id, this.msg, this.object, this.email);
    console.log(this.email);
    console.log(this.object);
    console.log(this.msg);
  }

  show(id_m){
    let tmp = JSON.parse(JSON.stringify(this.HeadmasterService.getMessage(id_m))); 
    this.contenu= tmp.msg;
  }



}
