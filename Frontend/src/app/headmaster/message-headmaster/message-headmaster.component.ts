import { Component, OnInit, OnDestroy } from '@angular/core';
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
export class MessageHeadmasterComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    if(this.Subscriber!= null)
      this.Subscriber.unsubscribe();
    if(this.Subscriber2!= null)
      this.Subscriber2.unsubscribe();
  }
  //-----------send-----------
  object;
  recipient;
  msg;
  sender;
  Subscriber: Subscription;
//--------------receive---------
  messages;
  contenu;
  Subscriber2 : Subscription;
//-----------------------------

  constructor(private MailService:MailService, private LoginService: LoginService, private router: Router, private HeadmasterService: HeadmasterService) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.sender = JSON.parse(localStorage.getItem('user'));
   
      this.Subscriber = this.MailService.getMessages().subscribe(
      sen => {console.log(sen);
      this.messages= JSON.parse(JSON.stringify(sen));
      },
      error => console.log(error)
    );
 
    this.contenu="";
  }
  
  send(){
    this.Subscriber2 = this.MailService.sendMessage(this.sender.id, this.msg, this.object, this.recipient).subscribe(
      sen => console.log(sen),
      error => console.log(error)
    );

  }

  show(msg){
   /* let tmp = JSON.parse(JSON.stringify(this.MailService.getMessage(id_m))); 
    this.Subscriber3 = this.MailService.getMessage(id_m).subscribe(
      sen => {console.log(sen);
      this.contenu= JSON.parse(JSON.stringify(sen)).msg;
      },
      error => console.log(error)
    );*/
    this.contenu=msg;
  }
}
