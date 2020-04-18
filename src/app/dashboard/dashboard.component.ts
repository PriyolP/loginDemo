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

  addCart(item: object) {
    let product = this.productsList.find(function(x){if(x.id === item['id']){return x}});
    product['quantity'] = item['quantity'];
    product['userID'] = this.user[0]._id;

    let userCart: object = { userID: this.user[0]._id, productitem: [product] };

    this.service.addcartUsers(product, userCart)

    userCart = {};
  }

}
