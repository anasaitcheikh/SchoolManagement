import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_SERVER } from '../utils/server.conf';
import { Classroom } from '../utils/types';

const RESOURCE_NAME = 'classroom'

@Injectable()
export class ClassroomService {

  constructor(private httpClient: HttpClient) { }

  getClassrooms(_id: number) {
    return this.httpClient.get<Classroom[]>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`)
  }

  getClassroomById(_id: number) {
    return this.httpClient.get<Classroom>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}/${_id}`)
  }

  addClassroom(_classroom: Classroom) {
    return this.httpClient.post<Classroom>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`, {
      classroom: _classroom
    })
  }

  updateClassroom(_classroom: Classroom, _id: number) {
    return this.httpClient.put<Classroom>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}/${_id}`, {
      classroom: _classroom
    })
  }

  deleteClassroom(_id: number) {
    return this.httpClient.delete(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`)
  }
}
