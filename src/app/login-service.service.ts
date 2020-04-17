import { Injectable } from '@angular/core';

@Injectable()
export class LoginServiceService {
  public userDetailss = [
    { _id: 1, userId: 'priyol', pwd: '123456' },
    { _id: 2, userId: 'asd', pwd: 'asd' },
    { _id: 3, userId: 'pande', pwd: '123456' }
  ];
  // public imgLink = '../assets/download.png';
  // public productList = [
  //   { id: 0, img: this.imgLink, companyName: 'Tata', image: 'linkPic-Sorce', quality: 1, amount: 10, quantity: 0 },
  //   { id: 1, img: this.imgLink, companyName: 'Swift', image: 'linkPic-Sorce', quality: 2, amount: 10, quantity: 0 },
  //   { id: 2, img: this.imgLink, companyName: 'Indica', image: 'linkPic-Sorce', quality: 5, amount: 10, quantity: 0 },
  //   { id: 3, img: this.imgLink, companyName: 'Verna', image: 'linkPic-Sorce', quality: 1, amount: 10, quantity: 0 },
  //   { id: 4, img: this.imgLink, companyName: 'Samsung', image: 'linkPic-Sorce', quality: 2, amount: 10, quantity: 0 },
  //   { id: 5, img: this.imgLink, companyName: 'Nokia', image: 'linkPic-Sorce', quality: 5, amount: 10, quantity: 0 }
  // ];

  constructor() { }

  loginSucess(userNameId, password) {
    var checkUer = this.userDetailss.filter((x) => (x.userId === userNameId) && (x.pwd === password));
    if (checkUer.length > 0) {
        window.sessionStorage.setItem('x-auth', JSON.stringify(checkUer));
        return true;
      } else {
        return false;
      }
  }
  
}
