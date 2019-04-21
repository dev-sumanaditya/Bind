import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  private repeat = [1,2,3];
  private post = [1,2,2,2,2];

  constructor() { }

  ngOnInit() {
  }



  // scroll event
  onScroll() {
    console.log('scrolled');
  }

}
