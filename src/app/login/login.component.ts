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
    let login = this.service.loginSucess(this.userNameId, this.password);
    if (login) {
      this.router.navigate(['/dashboard']);
    } else {
      alert('please enter valid userId or Password');
    }
  }

}
