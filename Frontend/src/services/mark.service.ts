import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_SERVER } from '../utils/server.conf';

@Injectable()
export class MarkService {
    
  constructor(private http: HttpClient) { }

getMark(id_s){
    const req = this.http.get(API_SERVER.BASE_URI + "/mark?studentId="+id_s);
    return req;
  }

}