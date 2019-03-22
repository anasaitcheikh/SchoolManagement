import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_SERVER } from '../utils/server.conf';
import { Class } from '../utils/types';

const RESOURCE_NAME = 'class'

@Injectable()
export class ClassService {

  constructor(private httpClient: HttpClient) { }

  getClasses() {
    return this.httpClient.get<Class[]>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`)
  }

  getClassById(_id: number) {
    return this.httpClient.get<Class>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}/${_id}`)
  }

  getClassByTeacher(id_t: number) {
    const req = this.httpClient.get<Class>(API_SERVER.BASE_URI + "/"+RESOURCE_NAME+"?teacherId=" + id_t);
    return req;
  }

  addClass(_class: Class) {
    return this.httpClient.post<Class>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`, _class)
  }

  updateClass(_class: Class, _id: number) {
    return this.httpClient.put<Class>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}/${_id}`, _class)
  }

  deleteClass(_id: number) {
    return this.httpClient.delete(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`)
  }
}
