import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private repeat = [1,2,3];
  private post = [1,2,2,2,2,2,2,2,2,2,2,2];
  constructor() { }

  ngOnInit() {
  }
  private tab = 'feed';

  nav(data: string) {
    this.tab = data;
  }

}
