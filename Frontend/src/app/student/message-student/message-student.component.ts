import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-student',
  templateUrl: './message-student.component.html',
  styleUrls: ['./message-student.component.scss']
})
export class MessageStudentComponent implements OnInit {
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