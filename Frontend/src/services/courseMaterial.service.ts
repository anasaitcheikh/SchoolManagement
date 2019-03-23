import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_SERVER } from '../utils/server.conf';
import { Classroom } from '../utils/types';

const RESOURCE_NAME = 'course-material';

const HttpUploadOptions = {
  headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
}


@Injectable()
export class CourseMaterialService {

  constructor(private http: HttpClient) { }

  uploadFile(description: string, file: File) {
    let formData = new FormData();
    formData.set("description", description);
    formData.set("file", file);

    return this.http.post(
      `${API_SERVER.BASE_URI}/${RESOURCE_NAME}`, 
      formData, 
      HttpUploadOptions
    )
  }
}
