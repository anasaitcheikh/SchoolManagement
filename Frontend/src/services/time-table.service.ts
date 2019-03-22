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

  getCourseByTeacher(id_t){
    const req = this.httpClient.get(API_SERVER.BASE_URI + "/course?teacherId="+id_t);
    return req;
  }
}
