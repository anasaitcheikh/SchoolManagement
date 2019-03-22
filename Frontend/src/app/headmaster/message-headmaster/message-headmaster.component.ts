import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
import {HeadmasterService} from '../../../services/headmaster.service';
import {MailService} from '../../../services/mail.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-message-headmaster',
  templateUrl: './message-headmaster.component.html',
  styleUrls: ['./message-headmaster.component.scss']
})
export class MessageHeadmasterComponent implements OnInit {
  //-----------send-----------
  object;
  recipient;
  msg;
  sender;
  Subscriber: Subscription;
//--------------receive---------
  messages;
  contenu;
//-----------------------------

  constructor(private MailService:MailService, private LoginService: LoginService, private router: Router, private HeadmasterService: HeadmasterService) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.sender = JSON.parse(localStorage.getItem('user'));
    this.messages= JSON.parse(JSON.stringify(this.MailService.getMessages()));
    //let tmp = JSON.parse(JSON.stringify(this.HeadmasterService.getMessage(1))); 
    console.log(this.messages);
    this.contenu="";
  }
  
  send(){
    this.Subscriber = this.MailService.sendMessage(this.sender.id, this.msg, this.object, this.recipient).subscribe(
      sen => console.log(sen),
      error => console.log(error)
    );
    /*
    console.log(this.object);
    console.log(this.recipient);
    console.log(this.msg);
  */
  }

  show(id_m){
    let tmp = JSON.parse(JSON.stringify(this.MailService.getMessage(id_m))); 
    this.contenu= tmp.msg;
  }



}
