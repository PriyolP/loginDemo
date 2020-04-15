import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service'

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {

  public id: number;
  public productDetails: object;
  sub;
  constructor(
    private _serviceProduct: ProductServiceService,
    private _router: Router,
    private _activetedrouter: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.sub = this._activetedrouter.paramMap.subscribe(params => {
      console.log(params);
      this.id = Number(params.get('id'));
      let product = this._serviceProduct.productList;
      this.productDetails = product.find(p => p.id === this.id);
    });
    console.log(this.productDetails);
  }

}
