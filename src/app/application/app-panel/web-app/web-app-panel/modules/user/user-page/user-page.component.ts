import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  private repeat = [1,2,3];
  private post = [1,2,2,2,2];
  
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

  onScroll() {
    if(this.tab == 'feed') {
      for(let i=0; i<2; i++) {
        this.post.push(i);
      }
      console.log('scroll event fired');
    }
  }
}
