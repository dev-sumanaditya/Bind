import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent implements OnInit {

  @ViewChild('GroupDropdown') popperd; 

  private showDrop = false;
  constructor() { }

  ngOnInit() {
  }

  clickOut() {
    this.showDrop = false;
  }

  groupRightClick() {
    this.popperd.show();
    return false;
  }
  
  clickOutPopper() {
    this.popperd.hide();
  }
}
