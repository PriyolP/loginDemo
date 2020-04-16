import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  productsList = this.service.productList;
  user: object;

  constructor(private service: ProductServiceService) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('x-auth'));
  }

  addCart(item: string) {
    let arr, productLength: number, i: number = 0, userNumber = 0;
    let product = JSON.parse(item);
    // product.userID = this.user[0]._id;
    let userCart: object = { userID: this.user[0]._id, productitem: [product] };

    if (window.localStorage.getItem('cartUser')) {
      arr = JSON.parse(window.localStorage.getItem('cartUser'));
      for (var u of arr) {
        if (u.userID === this.user[0]._id) {
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
            window.localStorage.setItem('cartUser', JSON.stringify(arr));
          }
        }
      }
      window.localStorage.setItem('cartUser', JSON.stringify(arr));
      arr = [];
    } else {
      window.localStorage.setItem('cartUser', JSON.stringify([userCart]));
    }
    userCart = {};
  }

}
