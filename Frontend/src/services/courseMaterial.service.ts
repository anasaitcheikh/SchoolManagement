import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_SERVER } from '../utils/server.conf';
import { Classroom } from '../utils/types';

const RESOURCE_NAME = 'classroom'

@Injectable()
export class CourseMaterialService {

  constructor(private httpClient: HttpClient) { }

}
