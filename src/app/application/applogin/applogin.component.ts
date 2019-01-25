import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppAuthService } from '../services/app-auth.service';

@Component({
  selector: 'app-applogin',
  templateUrl: './applogin.component.html',
  styleUrls: ['./applogin.component.css']
})
export class ApploginComponent implements OnInit {

  private login1: FormGroup;
  private login2: FormGroup;
  private submitted1 = false;
  private submitted2 = false;
  private errmsg: string;
  private user;
  public progressValue: number;

  constructor(private fb: FormBuilder, private _auth: AppAuthService) { }

  ngOnInit() {
    this.login1 = this.fb.group({
      username: ['',
        Validators.compose([
          Validators.required,
          Validators.maxLength(50),
          Validators.minLength(3),
          Validators.pattern(/^\S*$/)
        ])
      ],
    },
    {
        // custom validator (get user)
    });

    this.login2 = this.fb.group({
      password: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      ]
    });
  }

  submit1() {
    if (this.login1.invalid) {
      return;
    }
    for (let i = 0; i < 100; i++) {
      this.progressValue = i;
    }
    this.submitted1 = true;
    this.user = this._auth.getUser(this.login1.value.username);
  }

  submit2() {
    this.submitted2 = true;
    console.log(this.login1.value, this.login2.value);
  }
}
