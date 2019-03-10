import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts-student/components/echarts/charts.service';

@Component({
  selector: 'app-index-student',
  templateUrl: './index-student.component.html',
  styleUrls: ['./index-student.component.scss'],
  providers: [ChartsService]
})
export class IndexStudentComponent implements OnInit {
  showloading: boolean = false;

  public AnimationBarOption;

  constructor(private _chartsService: ChartsService) { }

  ngOnInit() {
    this.AnimationBarOption = this._chartsService.getAnimationBarOption();
  }
}
