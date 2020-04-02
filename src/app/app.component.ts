import { Component, OnInit } from '@angular/core';
import { Key, $ } from 'protractor';
import { NgModel } from '@angular/forms';
import { LoginServiceService } from './login-service.service';

// (login seprate page) //done
// no lodash  // done
// use services; //done
// seperate components of product list;

// import * as _ from 'lodash';
// import { Statement } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loginDemo';
  public userLists = this.loginservice.userDetailss;
  // public isLogined = false;
  public UserName = '';
  public isloginRedirect = false;

  constructor(
    private loginservice: LoginServiceService
  ) { }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    // console.log('+++++ ' + window.location.pathname + ' +++++++++++++++');
    // // console.log(this.loginservice.url() + 'login');
    if (!window.localStorage.getItem('login') && (window.location.pathname !== '/login')) {
      this.isloginRedirect = false;
      window.location.href = (this.loginservice.url() + 'login');
    } else if (window.localStorage.getItem('login')) {
      this.isloginRedirect = true;
      if (window.location.pathname === '/login') {
        window.location.href = this.loginservice.url();
      }
    }
    // console.log(this.isloginRedirect);
    // console.log(window.localStorage.getItem('login'));
    window.localStorage.getItem('login') !== (undefined || null) ? this.autoLogin() : this.clear();
  }
  autoLogin() {
    this.UserName = JSON.parse(window.localStorage.getItem('login')).name;
    // this.isLogined = true;
  }
  clear() {}
  logout() {
    window.localStorage.removeItem('login');
    // this.isLogined = false;
    // this.UserName = '';
    window.location.href = (this.loginservice.url() + 'login');
  }

  // remove just for checking
  checkuserLists() {
    // console.log(this.userLists);
  }
}
