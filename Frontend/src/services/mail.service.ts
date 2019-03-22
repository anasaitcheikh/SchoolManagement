import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_SERVER } from '../utils/server.conf';

@Injectable()
export class MailService {
    
  constructor(private http: HttpClient) { }

getMessages(){
    const req = this.http.get(API_SERVER.BASE_URI + "/message");
    return req;
  }

  getMessage(id_msg){
    const req = this.http.get(API_SERVER.BASE_URI + "/message/" + id_msg);
    return req;
  } 

  sendMessage(id_sender,msg,obj,id_recep){
    const req = this.http.post(API_SERVER.BASE_URI + "/message",
      {
        msg : msg,
        object : obj,
        dateAndTime : Date.now(),
        sender : {
          id : id_sender
        },
        recipient : {
          id : id_recep
        }
      })
    return req;
  }

}