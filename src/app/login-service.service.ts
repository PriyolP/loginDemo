import { Injectable } from '@angular/core';

@Injectable()
export class LoginServiceService {
  public userDetailss = [
    { _id: 1, userId: 'priyol', pwd: '123456' },
    { _id: 2, userId: 'asd', pwd: 'asd' },
    { _id: 3, userId: 'pande', pwd: '123456' }
  ];

  public productList = [
      { id: 0, companyName: 'Nokia', image: 'linkPic-Sorce', quality: 1, amount: 10, quantity: 0 },
      { id: 1, companyName: 'Nokia', image: 'linkPic-Sorce', quality: 2, amount: 10, quantity: 0 },
      { id: 2, companyName: 'Nokia', image: 'linkPic-Sorce', quality: 5, amount: 10, quantity: 0 }
    ];

  constructor() { }

  url() {
    return 'http://localhost:4200/';
  }
}
