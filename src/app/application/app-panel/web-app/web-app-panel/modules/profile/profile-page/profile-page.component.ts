import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  private repeat = [1,2,3];
  private post = [1,2,2,2,2,2,2,2,2,2,2,2];
  
  private skill = [
    {section: 'Top Skills', skills: ['Web Development', 'Automotive', 'Electronics']},
    {section: 'Tools and Technology', skills: ['Java', 'C++', 'C', 'PHP', 'SQL', 'JavaScript', 'Node Js', 'HTML 5', 'CSS', 'jQuery', 'noSQL', 'Mongo DB', 'React', 'Python', 'Angular', 'RxJs', 'Redux']},
    {section: 'Other Skills', skills: ['Team Work', 'Leadership', 'Startups', 'Networking', 'Business Development']}
  ]

  private tab = 'feed';

  constructor() { }

  ngOnInit() {
  }

  nav(data: string) {
    this.tab = data;
  }

}
