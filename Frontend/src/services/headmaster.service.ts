import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable()
export class HeadmasterService {

  constructor(private http: HttpClient) { }

  addStudent(student) {
    console.log('in add student method');
    console.log('student', student);
    console.log('try call API');
    const req = this.http.post('http://localhost:8080/api/open/reunions/',
      {
        data: student
      })
    return req;
  }

  addTeacher(teacher) {
    console.log('in add teacher method');
    console.log('teacher', teacher);
    console.log('try call API');
    const req = this.http.post('http://localhost:8080/api/open/reunions/',
      {
        data: teacher
      })
    return req;

  }

  getAllStudents() {
    const req = this.http.get(`http://localhost:8080/api/close/reunions/`);
    return req;
  }

  getAllTeachers() {
    const req = this.http.get(`http://localhost:8080/api/close/reunions/`);
    return req;
  }

  addClass(classe) {
    console.log('in add classe method');
    console.log('classe', classe);
    console.log('try call API');
    const req = this.http.post('http://localhost:8080/api/open/reunions/',
      {
        data: classe
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
    const req = this.http.post('http://localhost:8080/api/open/reunions/',
      {
        data: table
      })
    return req;
  }
}
