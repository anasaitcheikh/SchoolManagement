import { Component, OnInit, OnDestroy } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
import {HeadmasterService} from '../../../services/headmaster.service';
import {MailService} from '../../../services/mail.service';
import { Subscription } from 'rxjs';
import {UserService} from '../../../services/user.service';

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
    if(this.Subscriber3!= null)
      this.Subscriber3.unsubscribe();
  }
  //-----------send-----------
  object;
  recipient;
  recipient_id;
  msg;
  sender;
  Subscriber: Subscription;
  Subscriber3: Subscription;
  Subscriber4: Subscription;
  emails;
//--------------receive---------
  messages;
  contenu;
  Subscriber2 : Subscription;
//-----------------------------

  constructor(private UserService: UserService, private MailService:MailService, private LoginService: LoginService, private router: Router, private HeadmasterService: HeadmasterService) { }

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

    this.Subscriber3 = this.UserService.getAllEmail(this.sender.status).subscribe(
      sen => {console.log(sen);
      this.emails= JSON.parse(JSON.stringify(sen));
      },
      error => console.log(error)
    );

  }
  
  send(){

    this.Subscriber4 =this.UserService.getUserByEmail(this.recipient).subscribe(
      sen => {//console.log(sen);
      this.recipient_id= JSON.parse(JSON.stringify(sen));
      this.Subscriber2 = this.MailService.sendMessage(this.sender.id, this.msg, this.object, this.recipient_id).subscribe(
        sen => console.log(sen),
        error => console.log(error)
      );
      },
      error => console.log(error)
    );
    console.log(this.recipient_id);

 

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
