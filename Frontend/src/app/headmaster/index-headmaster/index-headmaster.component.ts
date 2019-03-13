import { Component, OnInit } from '@angular/core';
import { ChartsService } from '../charts/components/echarts/charts.service';

@Component({
  selector: 'app-index',
  templateUrl: './index-headmaster.component.html',
  styleUrls: ['./index-headmaster.component.scss'],
  providers: [ChartsService]
})
export class IndexHeadmasterComponent implements OnInit {
  showloading = false;

  public AnimationBarOption;

  constructor(private _chartsService: ChartsService) { }

  ngOnInit() {
    this.AnimationBarOption = this._chartsService.getAnimationBarOption();
  }
}
