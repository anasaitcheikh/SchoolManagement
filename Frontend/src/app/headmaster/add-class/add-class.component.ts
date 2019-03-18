import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit {
   //class: Class
  constructor() { }

  ngOnInit() {
  }

  addClass(classe) {
     console.log('click on add class');
     console.log(classe.className);
     console.log(classe.classGrade);
     console.log(classe.classLevel);
     console.log(classe.year);
   //  this.class = class
       //this.ser.addClass(class)
}
}
