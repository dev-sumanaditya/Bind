import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from '../../validators/cnf-pass.validator';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  private appReg: FormGroup;
  private submitted = false;
  private errmsg: string;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.appReg = this.fb.group({
      email: ['',
        Validators.compose([
         Validators.required,
         Validators.email,
         Validators.maxLength(50),
         Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])
      ],
      username: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ])
      ],
      pass: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      ],
      cnfPass: ['',
        Validators.compose([
          Validators.required,
          Validators.minLength(8)
        ])
      ],
      tnc: [false,
        Validators.compose([
          Validators.requiredTrue,
        ])
      ]
    },
    {
      validator: MustMatch('pass', 'cnfPass')
    });
  }

  get f() { return this.appReg.controls; }

  submit() {
    this.submitted = true;
    if (this.appReg.invalid) {
      if (this.f.email.invalid) {
        this.errmsg = 'Enter a valid email';
        return ;
      }
      if (this.f.username.invalid) {
        this.errmsg = 'Invalid username';
        return;
      }
      if (this.f.pass.invalid) {
        this.errmsg = 'Try a stronger password';
        return;
      }
      if (this.f.cnfPass.invalid) {
        this.errmsg = 'Passwords do not match';
      }
      console.log('invalid input');
      return;
    }
    this.errmsg = '';
    alert('Success');
    console.log(JSON.stringify(this.appReg.value));
  }
}
