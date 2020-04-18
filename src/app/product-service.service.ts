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

  addcartUsers(product, userCart) {
    let arr=[], productLength: number, i: number = 0, userNumber = 0;
    let getItems = window.localStorage.getItem('cartUser')
    if (getItems) {
      arr = JSON.parse(getItems);
      for (var u of arr) {
        if (u.userID === product.userID) {
          productLength = u.productitem.length;
          for (var p of u.productitem) {
            if (p.id === product.id) { 
              // alert('same value');
              p.quantity = product.quantity;

            } else {
              i++;
              if (productLength === i) {
                u.productitem.push(product);
              }
            }
          }
          if(u.productitem.length === 0 ){
              u.productitem.push(product);
            }
        } else {
          userNumber++;
          if (userNumber === arr.length) {
            arr.push(userCart);
            this.setItem(arr);
          }
        }
      }
      this.setItem(arr);
      arr = [];
    } else {
      this.setItem([userCart]);
    }
  }

  setItem(arr) {
    window.localStorage.setItem('cartUser', JSON.stringify(arr));
  }
}
