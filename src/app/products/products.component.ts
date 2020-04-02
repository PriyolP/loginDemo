import { Component, OnInit } from '@angular/core';
// import { AppComponent } from '../app.component';

// service
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productsList: any = [];
  public gets = 0;
  private userCart: any;

  constructor(
    private loginservice: LoginServiceService
  ) { }

  ngOnInit(): void {
    // alert('product');
    // console.log(this.approot.userLists);
    this.productsList = this.loginservice.productList;
    // this.productList = AppComponent.prod
  }

  checkQuantity(product, max) {
    if (product.quantity > max) {
      product.quantity = max;
    }
  }
  addCart(quantity, product) {
    console.log(product);
    console.log(JSON.parse(window.localStorage.getItem('cart')));
    // if (JSON.parse(window.localStorage.getItem('cart')).length > 0) { }
    // this.userCart = window.localStorage.get;
    console.log(quantity);
    if (quantity > 0) {
      this.userCart = {
        userID: JSON.parse(window.localStorage.getItem('login')).id,
        cart: [{
          productID: product.id,
          quantity,
          productAmount: product.amount
        }]
      };
      window.localStorage.setItem('cart', JSON.stringify(this.userCart));
    } else {
      // alert();
    }
  }
}
