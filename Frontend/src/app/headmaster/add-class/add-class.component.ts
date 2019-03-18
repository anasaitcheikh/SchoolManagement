import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClassService } from '../../../services/class.service';
import { Class } from '../../../utils/types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-class',
  templateUrl: './add-class.component.html',
  styleUrls: ['./add-class.component.scss']
})
export class AddClassComponent implements OnInit, OnDestroy {
  private _addClassSubscriber: Subscription

  constructor(private classService: ClassService) { }

  ngOnInit() {
  }


  ngOnDestroy(): void {
    if (this._addClassSubscriber){
      this._addClassSubscriber.unsubscribe();
    }
  }

  addClass(_class: Class){
     console.log('click on add class');
     console.log('class', _class);
     this._addClassSubscriber = this.classService.addClass(_class).subscribe(
       newClass => console.log(newClass),
       error => console.log(error)
    )
  }
}
