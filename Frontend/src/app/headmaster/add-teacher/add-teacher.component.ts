import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeacherService } from '../../../services/teacher.service';
import { Teacher } from '../../../utils/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit, OnDestroy {
  private _addTeacherSubscriber: Subscription

  constructor(private teacherService : TeacherService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this._addTeacherSubscriber) {
      this._addTeacherSubscriber.unsubscribe();
    }
  }

  addTeacher(teacher : Teacher){
     console.log('click on add teacher');
     teacher.status="TEACHER";
     this._addTeacherSubscriber = this.teacherService.addTeacher(teacher).subscribe(
       newTeacher => console.log(newTeacher),
       error => console.log(error)
    );
  }
}
