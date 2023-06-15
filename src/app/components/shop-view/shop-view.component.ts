import {Component, OnInit} from '@angular/core';
import {product} from "../../entity/product";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'shop-view',
  templateUrl: './shop-view.component.html',
  styleUrls: ['./shop-view.component.scss']
})
export class ShopViewComponent implements OnInit{

  products: product[] = []

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(product => this.products = product)
  }

}
