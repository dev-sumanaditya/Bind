import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-actions',
  templateUrl: './admin-actions.component.html',
  styleUrls: ['./admin-actions.component.css']
})
export class AdminActionsComponent implements OnInit {

  private reqData: any = [{
    'name': 'Mike',
    'request': 'allow access for Admin members page',
    'timeStamp': 'Dec 12 | 8:30 PM'
  },
  {
    'name': 'Maria',
    'request': 'review the user : maximillian',
    'timeStamp': 'Dec 18 | 10:00 AM'
  }];

  constructor() { }

  ngOnInit() {
  }

}
