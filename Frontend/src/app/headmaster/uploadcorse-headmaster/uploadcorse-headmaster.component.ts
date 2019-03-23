import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
import {CourseMaterialService} from '../../../services/courseMaterial.service';

@Component({
  selector: 'app-uploadcorse-headmaster',
  templateUrl: './uploadcorse-headmaster.component.html',
  styleUrls: ['./uploadcorse-headmaster.component.scss']
})
export class UploadcorseHeadmasterComponent implements OnInit {
  fileToUpload: File = null;
  constructor(private CourseMaterialService: CourseMaterialService, private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

uploadFile(form){
  this.CourseMaterialService.uploadFile(form.description, this.fileToUpload).subscribe(
    success => console.log('success', success),
    error =>  console.log('error', error)
  )
}

}
