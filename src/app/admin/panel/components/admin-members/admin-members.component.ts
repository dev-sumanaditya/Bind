import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-members',
  templateUrl: './admin-members.component.html',
  styleUrls: ['./admin-members.component.css']
})
export class AdminMembersComponent implements OnInit {

  private members: any = [
    {'name': 'John Doe', 'role': 'admin', 'email': 'admin@bind.com', 'joined': '12th Sept 2017' },
    {'name': 'Marry Jane', 'role': 'admin', 'email': 'admin2@bind.com', 'joined': '12th Sept 2017' },
    {'name': 'Maxi Millian', 'role': 'admin', 'email': 'admin3@bind.com', 'joined': '12th Sept 2017' },
    {'name': 'Mosh', 'role': 'moderator', 'email': 'admin4@bind.com', 'joined': '12th Sept 2017' },
    {'name': 'Tom hardy', 'role': 'admin', 'email': 'admin5@bind.com', 'joined': '12th Sept 2017' },
    {'name': 'Bill', 'role': 'member', 'email': 'admin6@bind.com', 'joined': '12th Sept 2017' },
    {'name': 'Steve', 'role': 'member', 'email': 'admin7@bind.com', 'joined': '12th Sept 2017' },
    {'name': 'Bill', 'role': 'member', 'email': 'admin6@bind.com', 'joined': '12th Sept 2017' },
    {'name': 'Bill', 'role': 'member', 'email': 'admin6@bind.com', 'joined': '12th Sept 2017' },
    {'name': 'Bill', 'role': 'member', 'email': 'admin6@bind.com', 'joined': '12th Sept 2017' },
  ];

  private infoData: any;
  private infoindex;
  showMember(index) {
    this.infoData = this.members[index];
    this.infoindex = index;
  }
  constructor() { }

  ngOnInit() {
  }

}
