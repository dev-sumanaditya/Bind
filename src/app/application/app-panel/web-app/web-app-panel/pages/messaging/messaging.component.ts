import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-messaging',
  templateUrl: './messaging.component.html',
  styleUrls: ['./messaging.component.css']
})
export class MessagingComponent implements OnInit {

  groups: number[] = [];
  dms: number[] = [];
  archives: number[] = [];

  showarc = false;
  new = false;

  constructor() {
    for (let i = 0; i < 3; i++) {
      this.groups.push(i);
    }
    for (let i = 0; i < 10; i++) {
      this.dms.push(i);
    }
    for (let i = 0; i < 10; i++) {
      this.archives.push(i);
    }
  }

  ngOnInit() {
  }

  showArchives() {
    this.showarc = !this.showarc;
  }
  showDropdown() {
    this.new = !this.new;
  }
}
