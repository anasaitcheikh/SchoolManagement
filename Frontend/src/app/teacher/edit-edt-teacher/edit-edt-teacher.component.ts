import {Component, OnDestroy, OnInit} from '@angular/core';
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

 // teachers: Teacher[] = [];
  classes: Class[] = [];
  classrooms: Classroom[] = [];
  subject: number;
  teacherId: number;
  _createTimeTableSubscriber: Subscription;

  constructor(private LoginService: LoginService,
              private classroomService: ClassroomService,
              private classService: ClassService,
              private subjectService: SubjectService,
              private teacherService: TeacherService,
              private timeTableService: TimeTableService,
              private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.getTeacherId();
    this.getSpeciality();
    this.getClassrooms();
  //  this.getSubjects();
    this.getClasses();
  }

  ngOnDestroy(): void {
    if (this._createTimeTableSubscriber) {
      if (this._createTimeTableSubscriber != null) {
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
      id : course.subject
    }
    course.teacher = teacher;
    course.classe = classe;
    course.subject = subject;
    course.classroom = classroom;
    course.status = false;
    console.log('course structured ', course);
    this._createTimeTableSubscriber = this.timeTableService.addCourse(course).subscribe(
      newCourse => console.log('add course successfull', newCourse),
      error => console.log(error)
    );

  }

  modifyTimeTable(course){
    console.log('click on modify time table');

  }

  getClasses() {
    this._createTimeTableSubscriber = this.classService.getClassByTeacher(this.teacherId).subscribe(
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


  getSpeciality(){
    console.log(JSON.parse(localStorage.getItem('user')));
    this.subject = JSON.parse(localStorage.getItem('user')).id;
    console.log('teacher speciality: ', this.subject);
  }

   getTeacherId() {
     this.teacherId = JSON.parse(localStorage.getItem('user')).id;
     console.log('teacher id: ', this.teacherId);
   }
//getTeacherById()
  //getSpecialityByTeacher()
  //getSpecialityIdByName()
}
