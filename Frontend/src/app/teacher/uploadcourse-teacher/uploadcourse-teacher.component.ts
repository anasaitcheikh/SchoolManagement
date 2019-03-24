import { Component, OnInit, OnDestroy } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router'
import { CourseMaterialService } from '../../../services/courseMaterial.service';
import { Subscription } from 'rxjs';
import { CourseMaterial } from '../../../utils/types';
import { API_SERVER } from '../../../utils/server.conf';

const RESOURCE_NAME = 'course-material';

@Component({
  selector: 'app-uploadcourse-teacher',
  templateUrl: './uploadcourse-teacher.component.html',
  styleUrls: ['./uploadcourse-teacher.component.scss']
})
export class UploadcourseTeacherComponent implements OnInit, OnDestroy {
  private _uploadSubscription: Subscription;
  private _getSubscription: Subscription;

  DOWNLOAD_RESSOURCE = `${API_SERVER.BASE_URI}/${RESOURCE_NAME}`;

  fileToUpload: File = null;
  description: string = '';

  courseMaterials: CourseMaterial[] = [];

  constructor(private CourseMaterialService: CourseMaterialService, private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (!this.LoginService.is_loggedin()) {
      this.router.navigate(['login'])
    }
    this.getAllCourseMaterial();
  }

  ngOnDestroy(): void {
    if (this._getSubscription != null) {
      this._getSubscription.unsubscribe()
    }

    if (this._uploadSubscription != null) {
      this._uploadSubscription.unsubscribe()
    }
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  uploadFile() {
    console.log("desc", this.description);
    this._uploadSubscription = this.CourseMaterialService.uploadFile(this.description, this.fileToUpload).subscribe(
      success => console.log('success', success),
      error => console.log('error', error)
    )
  }

  getAllCourseMaterial() {
    this._getSubscription = this.CourseMaterialService.getAllCourseMaterial().subscribe(
      courseMaterials => {
        console.log('success', courseMaterials);
        this.courseMaterials = courseMaterials
      },
      error => console.log('error', error)
    )
  }
}
