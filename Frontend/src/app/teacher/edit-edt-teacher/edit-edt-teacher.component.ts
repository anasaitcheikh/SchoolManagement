import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import {Class, Classroom, Subject, Teacher} from '../../../utils/types';
import {Subscription} from 'rxjs/Subscription';
import {ClassroomService} from '../../../services/classroom.service';
import {ClassService} from '../../../services/class.service';
import {SubjectService} from '../../../services/subject.service';
import {TeacherService} from '../../../services/teacher.service';
import {TimeTableService} from '../../../services/time-table.service';

@Component({
  selector: 'app-edit-edt-teacher',
  templateUrl: './edit-edt-teacher.component.html',
  styleUrls: ['./edit-edt-teacher.component.scss']
})
export class EditEdtTeacherComponent implements OnInit, OnDestroy {


  classes: Class[] = [];
  classrooms: Classroom[] = [];
  subject;
  times: string[] = [];
  teacherId = JSON.parse(localStorage.getItem('user')).id;
  _createTimeTableSubscriber: Subscription;
  statutAlert: boolean;
  constructor(private LoginService: LoginService,
              private classroomService: ClassroomService,
              private classService: ClassService,
              private subjectService: SubjectService,
              private teacherService: TeacherService,
              private timeTableService: TimeTableService,
              private router: Router) { }

  ngOnInit() {
    if (! this.LoginService.is_loggedin()) {
      this.router.navigate(['login']);
    }

    this.getTeacher();
    this.getClassrooms();
    this.getClasses();
    this.initializeTime();
  }

  ngOnDestroy(): void {
    if (this._createTimeTableSubscriber) {
      if (this._createTimeTableSubscriber!= null) {
        this._createTimeTableSubscriber.unsubscribe();
      }
    }
  }

  createTimeTable(course){
    console.log('click on create time table', course);
    let teacher, classe, classroom, subject;
    teacher = {
      id : this.teacherId
    };
    classe = {
      id : course.classe
    };
    classroom = {
      id : course.classroom
    };
    subject = {
      id : this.subject.id
    }
    console.log('verify subject id: ', subject);
    course.teacher = teacher;
    course.classe = classe;
    course.subject = subject;
    course.classroom = classroom;
    course.status = false;
    console.log('course structured ', course);
    this._createTimeTableSubscriber = this.timeTableService.addCourse(course).subscribe(
      newCourse => {
        this.statutAlert = true;
        console.log('add course successfull', newCourse)
      },
      error => {
        this.statutAlert = false;
        console.log(error)
      }
    );

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

  getTeacher() {
    let subjectSubscriber: Subscription;
    this._createTimeTableSubscriber = this.teacherService.getTeacherById(this.teacherId).subscribe(
      newteacher => {
           subjectSubscriber = this.subjectService.getSubjectByName(newteacher.specialty).subscribe(
          subject => {this.subject = subject; console.log('subject', this.subject)},
          error => console.log('error', error)
        );
        console.log('teacher : ', newteacher)} ,
      error => console.log('error', error)
    );
  }

  initializeTime() {
    this.times = [
      '08:00:00',
      '09:00:00',
      '10:00:00',
      '11:00:00',
      '12:00:00',
      '13:00:00',
      '14:00:00',
      '15:00:00',
      '16:00:00',
      '17:00:00',
      '18:00:00',
    ];
  }


//getTeacherById()
  //getSpecialityByTeacher()
  //getSpecialityIdByName()
}
