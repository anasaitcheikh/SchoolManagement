import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enter-notes',
  templateUrl: './enter-notes.component.html',
  styleUrls: ['./enter-notes.component.scss']
})
export class EnterNotesComponent implements OnInit {
  firstn : string;
  lastn : string;
  subject : string;
  score : number;
  
  constructor() { }

  ngOnInit() {
  }
  
  send(){
    console.log(this.firstn);
    console.log(this.lastn);
    console.log(this.subject);
    console.log(this.score);

  }

}
