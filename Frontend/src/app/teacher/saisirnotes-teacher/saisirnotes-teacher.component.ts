import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { ClassService } from '../../../services/class.service';
import { Subscription } from 'rxjs';
import { StudentService } from '../../../services/student.service';
import { MarkService } from '../../../services/mark.service';


@Component({
  selector: 'app-saisirnotes-teacher',
  templateUrl: './saisirnotes-teacher.component.html',
  styleUrls: ['./saisirnotes-teacher.component.scss']
})
export class SaisirnotesTeacherComponent implements OnInit {


  Subscriber: Subscription;
  user;
  score  : number;
  classes;
  students;
  res;

  class_id;
  stu_id;
  constructor(private MarkService : MarkService ,private StudentService: StudentService, private ClassService : ClassService, private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.user = JSON.parse(localStorage.getItem('user'))
    this.get_classes();
  }


get_classes(){
  this.Subscriber = this.ClassService.getClassByTeacher(this.user.id).subscribe(
    sen => {console.log(sen);
    this.classes= JSON.parse(JSON.stringify(sen));
    },
    error => console.log(error)
  );
}


get_students(id_class){
  this.class_id= id_class;

  this.Subscriber = this.StudentService.getAllStudentByClassId(id_class).subscribe(
    sen => {console.log(sen);
    this.students= JSON.parse(JSON.stringify(sen));
    },
    error => console.log(error)
  );
}

fill_student(stu){
  this.stu_id= stu;
}

add_mark(){
  this.Subscriber = this.MarkService.enter_mark(this.stu_id , this.class_id, this.score).subscribe(
    sen => {console.log(sen);
    this.res= JSON.parse(JSON.stringify(sen));
    },
    error => console.log(error)
  );
}


/*  changescore(){
    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.score);
    console.log(this.subject);
  }
*/
}
