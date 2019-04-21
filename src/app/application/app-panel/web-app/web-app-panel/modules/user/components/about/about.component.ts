import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  private skill = [
    {section: 'Top Skills', skills: ['Web Development', 'Automotive', 'Electronics']},
    {section: 'Tools and Technology', skills: ['Java', 'C++', 'C', 'PHP', 'SQL', 'JavaScript', 'Node Js', 'HTML 5', 'CSS', 'jQuery', 'noSQL', 'Mongo DB', 'React', 'Python', 'Angular', 'RxJs', 'Redux']},
    {section: 'Other Skills', skills: ['Team Work', 'Leadership', 'Startups', 'Networking', 'Business Development']}
  ]

  private repeat = [1,2,3];

  constructor() { }

  ngOnInit() {
  }

}
