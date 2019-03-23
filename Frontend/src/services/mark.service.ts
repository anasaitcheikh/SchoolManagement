import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { API_SERVER } from '../utils/server.conf';

@Injectable()
export class MarkService {
    
  constructor(private http: HttpClient) { }

getMarkByStudent(id_s){
    const req = this.http.get(API_SERVER.BASE_URI + "/mark?studentId="+id_s);
    return req;
  }

enter_mark(id_s, id_c, m){
  const mark = {
    student :{
      id : id_s
    },
    subject :{
      id : id_c
    },
    mark : m
  }
  console.log(mark);
  return this.http.post(API_SERVER.BASE_URI + "/mark",{
    student :{
      id : id_s
    },
    subject :{
      id : id_c
    },
    mark : m
  });
}

}