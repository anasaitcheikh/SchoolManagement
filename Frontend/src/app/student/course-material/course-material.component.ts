import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {CourseMaterialService} from '../../../services/courseMaterial.service';
import {LoginService} from '../../../services/login.service';
import {Router} from '@angular/router';
import {API_SERVER} from '../../../utils/server.conf';
import {CourseMaterial} from '../../../utils/types';
const RESOURCE_NAME = 'course-material';
@Component({
  selector: 'app-course-material',
  templateUrl: './course-material.component.html',
  styleUrls: ['./course-material.component.scss']
})
export class CourseMaterialComponent implements OnInit, OnDestroy {

  private _getSubscription: Subscription;
  DOWNLOAD_RESSOURCE = `${API_SERVER.BASE_URI}/${RESOURCE_NAME}`;

  fileToUpload: File = null;
  description: string = '';

  courseMaterials: CourseMaterial[] = [];
  constructor(private CourseMaterialService: CourseMaterialService, private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this._getSubscription != null) {
      this._getSubscription.unsubscribe()
    }

    if (this._getSubscription != null) {
      this._getSubscription.unsubscribe()
    }
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
