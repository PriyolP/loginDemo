import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userLists = this.loginservice.userDetailss;
  public userName = '';

  constructor(
    private loginservice: LoginServiceService, private router: Router
  ) { }

  ngOnInit(): void { 
    console.log(sessionStorage.getItem('x-auth'));
    this.userName = JSON.parse(window.sessionStorage.getItem('x-auth'))[0].userId;
    console.log(this.userName);
  }

  logout() {
    sessionStorage.removeItem('x-auth');
    this.router.navigate(['/login']);
  }
}
