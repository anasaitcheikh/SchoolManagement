import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeadmasterService} from '../../../services/headmaster.service';
import {Subscription} from 'rxjs/Subscription';
import { StudentService} from '../../../services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit, OnDestroy {

  _addStudentSubscriber: Subscription;
  constructor(private studentService: StudentService) { }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this._addStudentSubscriber) {
      this._addStudentSubscriber.unsubscribe();
    }
  }


  addStudent(student) {
    console.log('click on add staff');
    console.log('staff', student);
    this._addStudentSubscriber = this.studentService.addStudent(student).subscribe(
      newStudent => console.log(newStudent),
      error => console.log(error)
    );
  }
}
