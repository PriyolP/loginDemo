import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() id: string;
  @Input() image: string;
  @Input() companyName: string;
  @Input() quality: number;
  @Input() amount: number;
  @Input() quantity: number;

  @Output() cart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    // console.log(this.productList);
    this.quantity = 0;
  }

  checkQuantity() {
    if (this.quantity > this.quality) { this.quantity = this.quality }
  }

  AddToCart() {
    if (this.quantity > 0)
      this.cart.emit({id:this.id, quantity:this.quantity});
  }

}
