import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_SERVER } from '../utils/server.conf';
import { Staff } from '../utils/types';

const RESOURCE_NAME = 'staff'

@Injectable()
export class StaffService {

  constructor(private httpClient: HttpClient) { }

  getStaffs() {
    return this.httpClient.get<Staff[]>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`)
  }

  getStaffById(_id: number) {
    return this.httpClient.get<Staff>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}/${_id}`)
  }

  addStaff(_staff: Staff) {
    console.log('in service staff', _staff);
    console.log(API_SERVER.BASE_URI, '/', RESOURCE_NAME)
    return this.httpClient.post<Staff>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`, _staff)

  }

  updateStaff(_staff: Staff, _id: number) {

    return this.httpClient.put<Staff>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}/${_id}`, _staff)
  }

  deleteStaff(_id: number) {
    return this.httpClient.delete(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}/${_id}`)
  }
}
