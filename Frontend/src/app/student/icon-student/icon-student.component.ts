import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-student',
  templateUrl: './icon-student.component.html',
  styleUrls: ['./icon-student.component.scss']
})
export class IconStudentComponent implements OnInit {

  iconItem = [
    'bug',
    'area-chart',
    'bar-chart',
    'bar-chart-o',
    'line-chart',
    'pie-chart',
    'cog',
    'cogs',
    'file',
    'bell',
    'calendar',
    'check',
    'close',
    'comment',
    'comments',
    'database',
    'image',
    'navicon',
    'home',
    'print',
    'star',
    'tag',
    'tags',
    'user',
    'file',
    'file-o',
    'file-text-o',
    'file-word-o',
    'file-excel-o',
    'file-powerpoint-o',
    'file-pdf-o',
    'file-code-o',
    'file-audio-o',
    'file-image-o',
    'file-video-o',
    'file-zip-o',
  ];
  
  constructor() { }

  ngOnInit() {
  }

}
