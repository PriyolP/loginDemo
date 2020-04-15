import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() productList;
  @Output() cart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // console.log(this.productList);
  }

  checkQuantity( product, quantity) {
    if(product.quantity > quantity) {product.quantity = quantity}
  }

  AddToCart(product) {
    if(product.quantity > 0)
      this.cart.emit(JSON.stringify(product));
  }
  
}
