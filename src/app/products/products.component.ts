import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productsList: any = [];
  public gets = 0;

  constructor(
    private approot: AppComponent
  ) { }

  ngOnInit(): void {
    // alert('product');
    console.log(this.approot.userLists);
    this.productsList = this.approot.productsList;
    // this.productList = AppComponent.prod
  }

  checkQuantity(product, max) {
    if (product.quantity > max) {
        product.quantity = max;
    }
  }
}
