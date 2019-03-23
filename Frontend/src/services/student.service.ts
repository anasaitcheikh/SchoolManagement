import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {API_SERVER} from '../utils/server.conf';
import {Student} from '../utils/types';
const RESOURCE_NAME = 'student'
@Injectable()
export class StudentService {

  constructor(private  httpClient: HttpClient) { }

  addStudent(_student: Student) {
    console.log('in service add student');
    console.log(API_SERVER.BASE_URI, '/', RESOURCE_NAME)
    return this.httpClient.post<Student>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`, _student);

  }

  getStudentById(id_s : number) {
    return this.httpClient.get<Student>(API_SERVER.BASE_URI+"/"+ RESOURCE_NAME+"/"+id_s);
  }

   getAllStudentByClassId(id_class : number) {
    return this.httpClient.get<Student>(API_SERVER.BASE_URI+"/"+ RESOURCE_NAME+"/all/"+id_class);
  }

/*showProfile(token){
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

}*/
}
