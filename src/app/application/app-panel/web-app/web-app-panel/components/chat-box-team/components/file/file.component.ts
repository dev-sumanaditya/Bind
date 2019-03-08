import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  private file = {
    type: 'document',
    star: false,
  }
  constructor() { }

  ngOnInit() {
  }

  markStar() {
    this.file.star = true;
  }
  removeStar() {
    this.file.star = false;
  }
}
