import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input()  name: String;
  @Input()  title: String;
  @Input()  image: String;
  @Input()  size: String;

  imgsrc: String;

  getInitials (string) {
    const names: string = string.split(' ');
    let initials: string = names[0].substring(0, 1).toUpperCase();

    if (names.length > 1) {
        initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  }

  getSize() {
    if (!this.size) {
      return 'medium';
    }
    return this.size;
  }

  getClass() {
    if (this.size === 'small') {
      this.title = '';
      return 'sm';
    } else if (this.size === 'large') {
      return 'lg';
    }
  }

  constructor() { }

  ngOnInit() {
    if (this.image) {
      this.imgsrc = this.image;
    }
  }

}
