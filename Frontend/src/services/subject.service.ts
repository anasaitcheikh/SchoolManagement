import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_SERVER } from '../utils/server.conf';
import { Subject } from '../utils/types';

const RESOURCE_NAME = 'subject'

@Injectable()
export class SubjectService {

  constructor(private httpClient: HttpClient) { }

  getSubjects(_id: number) {
    return this.httpClient.get<Subject[]>(`${API_SERVER}/${RESOURCE_NAME}`)
  }

  getSubjectById(_id: number) {
    return this.httpClient.get<Subject>(`${API_SERVER}/${RESOURCE_NAME}/${_id}`)
  }

  addSubject(_subject: Subject) {
    return this.httpClient.post<Subject>(`${API_SERVER}/${RESOURCE_NAME}`, {
      subject: _subject
    })
  }

  updateSubject(_subject: Subject, _id: number) {
    return this.httpClient.put<Subject>(`${API_SERVER}/${RESOURCE_NAME}/${_id}`, {
      subject: _subject
    })
  }

  deleteSubject(_id: number) {
    return this.httpClient.delete(`${API_SERVER}/${RESOURCE_NAME}`)
  }
}
