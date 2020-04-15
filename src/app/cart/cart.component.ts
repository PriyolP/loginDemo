import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public cartProduct = [];
  public userCartTotal = JSON.parse(localStorage.getItem('cartUser'));
  public userID: string;
  public totalCost: number;

  constructor() { }

  ngOnInit(): void {
    console.log('errrrrrrrrrrrrrrrr');
    this.userID = JSON.parse(sessionStorage.getItem('x-auth'))[0]._id;
    // this.cartProduct = JSON.parse(localStorage.getItem('cartUser'));
    console.log(this.cartProduct);
    console.log(this.userID);
    for (let cart of JSON.parse(localStorage.getItem('cartUser'))) {
      if (cart.userID === this.userID) {
        this.cartProduct = cart.productitem;
        this.totalAmount(this.cartProduct);
      }
    }
    // console.log(this.cartProduct);

  }

  totalAmount(product) {
    var i = 0;
    for (let amt of product) {
      i += (amt.amount * amt.quantity);
    }
    this.totalCost = i;
  }


  remove(value:object) {
    console.log(value);
    for (let [i, product] of this.cartProduct.entries()) {
      console.log(i);
      console.log(product);
      if (value['id'] === product['id']) {
        this.cartProduct.splice(i, 1);
      }
    }
    this.totalAmount(this.cartProduct);
    for (let cart of this.userCartTotal) {
      if (cart.userID === this.userID) {
        cart.productitem = this.cartProduct;
      }
    }
    window.localStorage.setItem('cartUser', JSON.stringify(this.userCartTotal));
  }

}
