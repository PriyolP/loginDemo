import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userNameId = '';
  public password = '';
  // public message = '';
  public checkUer = [];
  public checkDisable = true;
  // public getUserData = [];
  allUserData: { _id: number; userId: string; pwd: string; }[];

  constructor(private service: LoginServiceService) { }

  ngOnInit(): void {
    this.allUserData = this.service.userDetailss;
    // console.log(window.localStorage.getItem('login'));
    console.log(this.checkDisable);
  }
  validation() {
    if (this.userNameId && this.password) {
      this.checkDisable = false;
    } else {
      this.checkDisable = true;
    }
    // // console.log(this.userNameId);
    // console.log('enter');
  }

  submit() {
    this.checkUer = this.allUserData.filter((x) => (x.userId === this.userNameId) && (x.pwd === this.password));
    // console.log(this.checkUer);
    // console.log(this.checkUer.length);
    if (this.checkUer.length > 0) {
      window.localStorage.setItem('login', JSON.stringify(this.checkUer));
      window.location.href = this.service.url();
    } else {
      alert('please enter valid userId or Password');
    }

    // window.location
    // window.location.href = this.service.url();
  }

}
