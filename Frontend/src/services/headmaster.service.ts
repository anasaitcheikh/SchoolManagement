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
    return this.http.get(API_SERVER.BASE_URI+'/student');
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
