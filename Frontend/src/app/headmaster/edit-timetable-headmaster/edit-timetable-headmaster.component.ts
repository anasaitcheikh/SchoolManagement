import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {ClassroomService} from '../../../services/classroom.service';
import {SubjectService} from '../../../services/subject.service';
import {Subscription} from 'rxjs/Subscription';
import { Router } from '@angular/router';
import {Teacher, Class, Classroom, Subject} from '../../../utils/types';
import {ClassService} from '../../../services/class.service';
import {TeacherService} from '../../../services/teacher.service';
@Component({
  selector: 'app-edit-timetable-headmaster',
  templateUrl: './edit-timetable-headmaster.component.html',
  styleUrls: ['./edit-timetable-headmaster.component.scss']
})
export class EditTimetableHeadmasterComponent implements OnInit {

  teachers: Teacher[] = [];
  classes: Class[] = [];
  classrooms: Classroom[] = [];
  subjects: Subject[] = [];

  _createTimeTableSubscriber: Subscription;

  constructor(private LoginService: LoginService,
              private classroomService: ClassroomService,
              private classService: ClassService,
              private subjectService: SubjectService,
              private teacherService: TeacherService,
              private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.getClasses();
    this.getClassrooms();
    this.getSubjects();
    this.getTeachers();
  }

  createTimeTable(course){
    console.log('click on create time table');

  }

  modifyTimeTable(course){
    console.log('click on modify time table');

  }

  getClasses() {
    this._createTimeTableSubscriber = this.classService.getClasses().subscribe(
      classes => {this.classes = classes; console.log('classes', this.classes)},
      error => console.log('error', error)
    );
  }

  getClassrooms() {
    this._createTimeTableSubscriber = this.classroomService.getClassrooms().subscribe(
      classrooms => {this.classrooms = classrooms; console.log('classrooms', this.classrooms)} ,
      error => console.log('error', error)
    );
  }

  getSubjects() {
    this._createTimeTableSubscriber = this.subjectService.getSubjects().subscribe(
      subjects => {this.subjects = subjects; console.log('subjects', this.subjects)},
      error => console.log('error', error)
    );
  }

  getTeachers() {
    this._createTimeTableSubscriber = this.teacherService.getTeachers().subscribe(
      teachers => {this.teachers = teachers; console.log('teachers', this.teachers)},
      error => console.log('error', error)
    );
  }
}
