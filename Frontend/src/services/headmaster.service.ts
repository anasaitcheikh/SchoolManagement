import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_SERVER } from '../utils/server.conf';

const RESOURCE_NAME = 'headmaster'

@Injectable()
export class HeadmasterService {

  constructor(private http: HttpClient) { }

  addStudent(student) {
    console.log('in add student method');
    console.log('student', student);
    console.log('try call API');
    const req = this.http.post(API_SERVER.BASE_URI + "xxx",
      {
        data: student
      })
    return req;
  }

  getMessages(){
    const req = this.http.get(API_SERVER.BASE_URI + "message");
    return req;
  }

  getMessage(id_msg){
    const req = this.http.get(API_SERVER.BASE_URI + "message/" + id_msg);
    return req;
  } 

  sendMessage(id_sender,msg,obj,id_recep){
    const req = this.http.post(API_SERVER.BASE_URI + "message",
      {
        msg : msg,
        object : obj,
        dateAndTime : Date.now(),
        sender : {
          id : id_sender
        },
        recepient : {
          id : id_recep
        }
      })
    return req;
  }
  

  addTeacher(teacher) {
    console.log('in add teacher method');
    console.log('teacher', teacher);
    console.log('try call API');
    const req = this.http.post(API_SERVER.BASE_URI + "xxx",
      {
        data: teacher
      })
    return req;

  }

  getAllStudents() {
    const req = this.http.get(API_SERVER.BASE_URI + "xxx", );
    return req;
  }

  getAllTeachers() {
    const req = this.http.get(API_SERVER.BASE_URI + "xxx", );
    return req;
  }

  getAllClasses() {
    const req = this.http.get(API_SERVER.BASE_URI + "xxx", );
    return req;
  }

  addClass(classe) {
    console.log('in add classe method');
    console.log('classe', classe);
    console.log('try call API');
    const req = this.http.post(API_SERVER.BASE_URI + "xxx",
      {
        class: {
          className : classe.className,
          classGrade : classe.classGrade,
          classLevel : classe.classLevel,
          classYear : classe.year
        }
      })
    return req;
  }

  bookRoom(_idRoom) {

  }

  getPlanning() {

  }

  getPlanningChangeRequest() {

  }

  createTimeTable(table) {
    console.log('in add time table');
    console.log('table', table);
    console.log('try call API');
    const req = this.http.post(API_SERVER.BASE_URI + "xxx",
      {
        data: table
      })
    return req;
  }
}
