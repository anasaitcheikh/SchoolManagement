import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-teacher',
  templateUrl: './message-teacher.component.html',
  styleUrls: ['./message-teacher.component.scss']
})
export class MessageTeacherComponent implements OnInit {

  default_data: Array<any>;

  constructor() { }

  ngOnInit() {
    this.default_data = [
      { sender: 'Steve@lol.fr', object: 'Money back' },
      { sender: 'Simon@lol.fr', object: 'baliz la'},
      { sender: 'Jane@lol.fr', object: 'wala wala 3awtani' },
  ];
  }

}
