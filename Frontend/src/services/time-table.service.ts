import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Course} from '../utils/types';
import {API_SERVER} from '../utils/server.conf';
const RESOURCE_NAME = 'course'
@Injectable()
export class TimeTableService {

  constructor(private httpClient: HttpClient) { }
  addCourse(course: Course) {
    return this.httpClient.post<Course>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`, course);
  }
   getCoursesByClassId(_idClass: number) {
     return this.httpClient.get(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}` + '?classId=' + _idClass);
   }
   getCoursesByStudentId(id_s: number) {
    return this.httpClient.get(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}` + '?studentId=' + id_s);
  }
  getCourseByTeacher(id_t: number){
    const req = this.httpClient.get(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}` + '?teacherId=' + id_t);
    return req;

  }

  deleteCourseById(_id: number) {
     return this.httpClient.delete(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}/` + _id);
  }

  getAllCourses() {
      return this.httpClient.get<Course[]>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`);
  }

  getAllCoursesByStatus(status: boolean) {
    return this.httpClient.get<Course[]>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`+ '?status=' + status);
  }
}
//course?classId=1
