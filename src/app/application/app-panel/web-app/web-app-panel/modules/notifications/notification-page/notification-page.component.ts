import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notification-page',
  templateUrl: './notification-page.component.html',
  styleUrls: ['./notification-page.component.css']
})
export class NotificationPageComponent implements OnInit {

  private dummy = [
    {
      type: 'like',
      info: 'Daren Smith and 23 others liked a photo you shared',
      img: 'https://cdn-images-1.medium.com/max/1600/1*Zh0sx8tL7TzFh0O2-pNlWw.png',
      time: '1m ago'
    },
    {
      type: 'comment',
      info: 'Lisa and 2 others commented on a post you shared',
      img: 'https://cdn-images-1.medium.com/max/1600/1*Zh0sx8tL7TzFh0O2-pNlWw.png',
      time: '2h ago'
    },
    {
      type: 'post',
      info: 'Dave Morin shared an image recently',
      img: 'https://cdn-images-1.medium.com/max/1600/1*Zh0sx8tL7TzFh0O2-pNlWw.png',
      time: '1d ago'
    },
    {
      type: 'follow',
      info: 'Mike and 2 others started following you',
      img: 'https://cdn-images-1.medium.com/max/1600/1*Zh0sx8tL7TzFh0O2-pNlWw.png',
      time: '1d ago'
    },
    {
      type: 'like',
      info: 'Daren Smith and 23 others liked a photo you shared',
      img: 'https://cdn-images-1.medium.com/max/1600/1*Zh0sx8tL7TzFh0O2-pNlWw.png',
      time: '1m ago'
    },
    {
      type: 'comment',
      info: 'Lisa and 2 others commented on a post you shared',
      img: 'https://cdn-images-1.medium.com/max/1600/1*Zh0sx8tL7TzFh0O2-pNlWw.png',
      time: '2h ago'
    },
    {
      type: 'post',
      info: 'Dave Morin shared an image recently',
      img: 'https://cdn-images-1.medium.com/max/1600/1*Zh0sx8tL7TzFh0O2-pNlWw.png',
      time: '1d ago'
    },
    {
      type: 'follow',
      info: 'Addrian Lee accepted your follow request',
      img: 'https://cdn-images-1.medium.com/max/1600/1*Zh0sx8tL7TzFh0O2-pNlWw.png',
      time: '1d ago'
    },
  ];


  private req = [
    {
      groupreq: false,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7n2OEfv0kezZIP5PUrNZVfXGqjcDchRG-1GH_pfGnmg3QiL_',
      user: 'Adrian Lee',
      info: 'follow you',
      time: '2h ago'
    },
    {
      groupreq: true,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7n2OEfv0kezZIP5PUrNZVfXGqjcDchRG-1GH_pfGnmg3QiL_',
      user: 'Emma Erin',
      info: 'join your group',
      gimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5jzndyIi5aftJYqroNhnqesV9JgDAUpzJ3IrG-uy2ZjUXfCX',
      gname: 'Bind Network',
      time: '1d ago'
    },
    {
      groupreq: false,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7n2OEfv0kezZIP5PUrNZVfXGqjcDchRG-1GH_pfGnmg3QiL_',
      user: 'Adrian Lee',
      info: 'follow you',
      time: '2h ago'
    },
    {
      groupreq: true,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7n2OEfv0kezZIP5PUrNZVfXGqjcDchRG-1GH_pfGnmg3QiL_',
      user: 'Emma Erin',
      info: 'join your group',
      gimg: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG5jzndyIi5aftJYqroNhnqesV9JgDAUpzJ3IrG-uy2ZjUXfCX',
      gname: 'Velar Studios',
      time: '1d ago'
    },
    {
      groupreq: false,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7n2OEfv0kezZIP5PUrNZVfXGqjcDchRG-1GH_pfGnmg3QiL_',
      user: 'Dave Morin',
      info: 'follow you',
      time: '2h ago'
    },
    {
      groupreq: true,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW7n2OEfv0kezZIP5PUrNZVfXGqjcDchRG-1GH_pfGnmg3QiL_',
      user: 'Emma Erin',
      info: 'join your group',
      gimg: 'https://about.canva.com/wp-content/uploads/sites/3/2016/08/Cafe-Logo.png',
      gname: 'Incubis Inc',
      time: '1d ago'
    },
  ];

  private requests:boolean = false;
  private noti:boolean = true;

  constructor() { }

  ngOnInit() {
  }

  showNotification() {
    this.requests = false;
  }
  showReq() {
    this.requests = true;
    this.noti = false;
  }

}
