import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private repeat = [1,2,3];
  private post = [1,2,2,2,2,2,2,2,2,2,2,2];
  private skills = ['Java', 'C++', 'C', 'PHP', 'SQL', 'JavaScript', 'Node Js', 'HTML 5', 'CSS', 'jQuery', 'noSQL', 'Mongo DB', 'React', 'Python', 'Angular', 'RxJs', 'Redux'];
  
  constructor() { }

  ngOnInit() {
  }
  private tab = 'feed';

  nav(data: string) {
    this.tab = data;
  }

}
