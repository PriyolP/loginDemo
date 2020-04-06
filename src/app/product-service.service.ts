import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  public imgLink = '../assets/download.png';
  public productList = [
    { id: 0, img: this.imgLink, companyName: 'Tata', image: 'linkPic-Sorce', quality: 1, amount: 10, quantity: 0 },
    { id: 1, img: this.imgLink, companyName: 'Swift', image: 'linkPic-Sorce', quality: 2, amount: 10, quantity: 0 },
    { id: 2, img: this.imgLink, companyName: 'Indica', image: 'linkPic-Sorce', quality: 5, amount: 10, quantity: 0 },
    { id: 3, img: this.imgLink, companyName: 'Verna', image: 'linkPic-Sorce', quality: 1, amount: 10, quantity: 0 },
    { id: 4, img: this.imgLink, companyName: 'Samsung', image: 'linkPic-Sorce', quality: 2, amount: 10, quantity: 0 },
    { id: 5, img: this.imgLink, companyName: 'Nokia', image: 'linkPic-Sorce', quality: 5, amount: 10, quantity: 0 }
  ];
  
  constructor() { }
}
