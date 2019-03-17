import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-room',
  templateUrl: './book-room.component.html',
  styleUrls: ['./book-room.component.scss']
})
export class BookRoomComponent implements OnInit {

  room : string;
  constructor() { }

  ngOnInit() {
  }

  book(){
    console.log(this.room);
  }

}
