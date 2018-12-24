import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminAuthService } from '../services/admin-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private adminLogin: FormGroup;
  private submitcount = 0;  // for max login attempts.
  private errormessage: String = '';


  constructor(private fb: FormBuilder, private _auth: AdminAuthService) { }

  // login submit
  submit(data) {
    if (this.adminLogin.invalid || this.submitcount > 2) {
      if (this.submitcount > 2) {
        console.log('you can not log in');
        this.errormessage = 'Reached maximum login attempts.';
        return;
      }
      console.log('invalid entry');
      this.errormessage = 'Enter a valid input.';
      return;
    }
    this.errormessage = '';
    this.submitcount += 1;
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.adminLogin.value));  // remove it at end. *********
    this._auth.loginUser(data)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }

  // Form field validation
  ngOnInit() {
    this.adminLogin = this.fb.group({
      email: ['',
       Validators.compose([
         Validators.required,
         Validators.email,
         Validators.maxLength(50),
         Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')])
      ],
      pass: ['',
       Validators.compose([
         Validators.required,
         Validators.minLength(8),
         Validators.maxLength(50)])]
    });
  }

}
