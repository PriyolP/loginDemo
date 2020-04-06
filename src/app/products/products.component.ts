import { Component, OnInit } from '@angular/core';

// service
import { ProductServiceService } from '../product-service.service';

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
    private productservice: ProductServiceService
  ) { }

  ngOnInit(): void {
    this.productsList = this.productservice.productList;
  }

  checkQuantity(product, max) {
    if (product.quantity > max) {
      product.quantity = max;
    }
  }
  addCart(quantity, product) {
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
