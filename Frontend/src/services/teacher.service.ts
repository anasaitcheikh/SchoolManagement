import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_SERVER } from '../utils/server.conf';

@Injectable()
export class TeacherService {

  constructor(private  http: HttpClient) { }

  

  editTimeTable(table) {
    console.log('in add time table');
    console.log('table', table);
    console.log('try call API');
    const req = this.http.put(API_SERVER.BASE_URI + "xxx",
      {
        data: table
      })
    return req;
  }
  

}
