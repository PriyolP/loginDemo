import { Component, OnInit } from '@angular/core';
import { Key, $ } from 'protractor';
import { NgModel } from '@angular/forms';
import { ViewChild, ElementRef } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('modelClose') closeBtn: ElementRef;
  title = 'loginDemo';
  public userLists: any = [
    { userId: 'priyol', pwd: '123456' },
    { userId: 'asd', pwd: 'asd' },
    { userId: 'pande', pwd: '123456' }
  ];
  public productsList = [
    { id: 0, companyName: 'Nokia', image: 'linkPic-Sorce', quality: 1, amount : 10, quantity: 0},
    { id: 1, companyName: 'Nokia', image: 'linkPic-Sorce', quality: 2, amount : 10, quantity: 0 },
    { id: 2, companyName: 'Nokia', image: 'linkPic-Sorce', quality: 5, amount : 10, quantity: 0 }
  ];
  public userEmail = '';
  public userPwd = '';
  public isLogined = false;
  public isNewUser = false;
  public UserName = '';

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnInit(): void {
    console.log(window.localStorage.getItem('login'));
    window.localStorage.getItem('login') !== (undefined || null) ? this.autoLogin() : this.clear();

  }
  autoLogin() {
    // alert('autoLogin');

    // this.close();
    this.UserName = JSON.parse(window.localStorage.getItem('login')).name;
    this.isLogined = true;
  }
  login() {
    if ((this.userEmail === (undefined || null || '')) || (this.userPwd === (undefined || null || ''))) {
      alert('invalid email or password');
      return;
    } else {
      console.log(_.filter(this.userLists, { userId: this.userEmail, pwd: this.userPwd }));
      if (_.filter(this.userLists, { userId: this.userEmail, pwd: this.userPwd }).length === 0) {
        alert('no exist of Data found. please sign up. ');
        return;
      } else {
        this.UserName = this.userEmail;
        window.localStorage.setItem('login', JSON.stringify({ name: this.userEmail, pwd: this.userPwd }));

        this.isLogined = true;
        this.close();
      }
    }

  }

  newUser() {
    this.isNewUser = true;
  }

  close() {
    this.closeModal();
  }
  private closeModal(): void {
    this.closeBtn.nativeElement.click();
  }
  clear() {
    this.userEmail = '';
    this.userPwd = '';

  }
  logout() {
    window.localStorage.removeItem('login');
    this.isLogined = false;
    this.UserName = '';
    // window.location.reload();
  }
}
