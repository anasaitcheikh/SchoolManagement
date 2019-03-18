import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {API_SERVER} from '../utils/server.conf';
@Injectable()
export class StudentService {

  constructor(private  http: HttpClient) { }

showProfile(token){
      const req = this.http.get(API_SERVER.BASE_URI +token);
      return req;
}

showTimetable(token){
  const req = this.http.get(API_SERVER.BASE_URI +"XXX");
  return req;
}

updatePass(token, oldpass,newpass){
  const req = this.http.put(API_SERVER.BASE_URI + "XXX"+ token, {
    user: {
      xx : oldpass,
      xxx : newpass
    }
  })
  return req;
}

getResult(token){
  const req = this.http.get(API_SERVER.BASE_URI+"result/" +token);
  return req;
}

getMessage(messageId: number) {
  
}

setMessage(senderId: number, receiverId: number, receiverEmail: string, messageObject: string, messageContent: string){

}
}
