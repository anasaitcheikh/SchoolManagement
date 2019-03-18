import { Component, OnInit } from '@angular/core';
import { Classroom } from '../../../utils/types';
import { Subscription } from 'rxjs';
import { ClassroomService } from '../../../services/classroom.service';

@Component({
  selector: 'app-view-classrooms',
  templateUrl: './view-classrooms.component.html',
  styleUrls: ['./view-classrooms.component.scss']
})
export class ViewClassroomsComponent implements OnInit {
  private ClassroomSubscriber: Subscription
  resJson : any
  Croom : Classroom
  constructor(private ClassroomService: ClassroomService) { }

  ngOnInit() {
      console.log('show classroom');
      this.ClassroomSubscriber = this.ClassroomService.getClassrooms().subscribe(
        res => {
          this.resJson = JSON.parse(JSON.stringify(res))
          this.Croom.roomNumber = this.resJson.roomNumber;
          this.Croom.floorNumber = this.resJson.floorNumber;
          this.Croom.capacity = this.resJson.capacity;

          console.log(this.resJson)
        },
        error => console.log(error)
      )
  }


}
