import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userNameId = '';
  public password = '';
  public checkUer = [];
  public checkDisable = true;
  allUserData: { _id: number; userId: string; pwd: string; }[];

  constructor(private service: LoginServiceService, private router: Router) { }

  ngOnInit(): void {
    this.allUserData = this.service.userDetailss;
  }
  validation() {
    if (this.userNameId && this.password) {
      this.checkDisable = false;
    } else {
      this.checkDisable = true;
    }
  }

  submit() {
    this.checkUer = this.allUserData.filter((x) => (x.userId === this.userNameId) && (x.pwd === this.password));
    if (this.checkUer.length > 0) {
      window.sessionStorage.setItem('x-auth', JSON.stringify(this.checkUer));
      this.router.navigate(['/dashboard']);
    } else {
      alert('please enter valid userId or Password');
    }
  }

}
