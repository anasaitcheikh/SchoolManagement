import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_SERVER } from '../utils/server.conf';
import { Teacher } from '../utils/types';

const RESOURCE_NAME = 'teacher'

@Injectable()
export class TeacherService {

  constructor(private httpClient: HttpClient) { }

  addTeacher(teacher: Teacher) {
    return this.httpClient.post<Teacher>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`, teacher);
  }

  getTeachers() {
    return this.httpClient.get<Teacher[]>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`);
  }
  getAllTeachers() {
    return this.httpClient.get(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`);
  }
  deleteTeacher(_id: number) {
    return this.httpClient.delete(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}/${_id}`)
  }
  getTeacherById(_id: number) {
    return this.httpClient.get<Teacher>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}/${_id}`)
  }
  updateTeacher(_teacher: Teacher, _id: number) {
    return this.httpClient.put<Teacher>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}/${_id}`, _teacher)
  }

  editTimeTable(table) { 
    console.log('in add time table');
    console.log('table', table);
    console.log('try call API');
    const req = this.httpClient.put(API_SERVER.BASE_URI + "xxx",
      {
        data: table
      })
    return req;
  }


}
