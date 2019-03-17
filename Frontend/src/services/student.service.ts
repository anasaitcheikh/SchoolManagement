import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable()
export class StudentService {

  constructor(private  http: HttpClient) { }

}
