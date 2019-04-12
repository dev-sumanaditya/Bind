import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private dummy = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]
  private x = 'null';
  private val = 'Near Me';
  private showAdvanced = false;
  private selectedTab:String = 'all';

  value: number = 1;
  options: Options = {
    floor: 0,
    ceil: 5,
    step: 1,
    minLimit: 1,
    maxLimit: 5,
    showSelectionBar: true,
    showTicks: true

  };

  show(data) {
    if (this.x == data) {
      this.x = 'null';
      return;
    }
    this.x = data
  }

  onChangeReadOnly() {
    if (this.value < 2) {
      this.val = 'Near Me';
    } else if (this.value >= 2 && this.value < 3) {
      this.val = 'In My City';
    } else if (this.value >= 3 && this.value < 4) {
      this.val = 'Within 100 Km';
    } else if (this.value >= 4 && this.value < 5) {
      this.val = 'In my Country';
    } else if (this.value >= 5 && this.value < 6) {
      this.val = 'Global';
    }
  }

  toggleAdvanced() {
    this.showAdvanced = !this.showAdvanced;
  }

  selTab(data) {
    this.selectedTab = data;
  }
}
