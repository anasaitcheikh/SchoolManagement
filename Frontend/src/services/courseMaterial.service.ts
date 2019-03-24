import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_SERVER } from '../utils/server.conf';
import { CourseMaterial } from '../utils/types';

const RESOURCE_NAME = 'course-material';

const HttpUploadOptions = {
  headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
}


@Injectable()
export class CourseMaterialService {

  constructor(private http: HttpClient) { }

  uploadFile(description: string, file: File) {
    let formData = new FormData();
    //formData.append("description", description);
    formData.set("description", description);
    formData.set("file", file);

    console.log(formData.get("description"))
    console.log(formData.get("file"))

    return this.http.post(
      `${API_SERVER.BASE_URI}/${RESOURCE_NAME}`, 
      formData, 
      //HttpUploadOptions
    )
  }

  getAllCourseMaterial() {
    return this.http.get<CourseMaterial[]>(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}`);
  }

  donwloadCourseMaterial(id: string) {
    return this.http.get(`${API_SERVER.BASE_URI}/${RESOURCE_NAME}/${id}`);
  }
}
