import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';


@Component({
  selector: 'app-uploadcorse-headmaster',
  templateUrl: './uploadcorse-headmaster.component.html',
  styleUrls: ['./uploadcorse-headmaster.component.scss']
})
export class UploadcorseHeadmasterComponent implements OnInit {
  fileToUpload: File = null;
  constructor() { }

  ngOnInit() { }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
}

}
