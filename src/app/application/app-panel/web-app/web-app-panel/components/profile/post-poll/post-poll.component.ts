import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormBuilder} from '@angular/forms';


@Component({
  selector: 'app-post-poll',
  templateUrl: './post-poll.component.html',
  styleUrls: ['./post-poll.component.css']
})
export class PostPollComponent implements OnInit {

  private val = -1;
  private spinner:boolean = false;
  private voted:boolean = false;

  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      value: ''
    })
  }

  ngOnInit() {
  }

  changeVal() {
    this.val = this.form.value;
  }

  submit() {
    this.spinner = true;
    setTimeout(() => {this.voted = true; this.spinner = false}, 2000)
  }


}
