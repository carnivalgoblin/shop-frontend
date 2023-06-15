import {Component, Input, OnInit} from '@angular/core';
import {product} from "../../entity/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit{

  @Input() product:product = new product(0,"", 0, "", "", "")

  products: product[] = []

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    //this.getProduct();
    this.getProducts();
  }

  // getProduct(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.productService.getProductById(id)
  //     .subscribe(product => this.product = product);
  // }

  getProducts(): void {
    this.productService.getProducts().subscribe(product => this.products = product)
  }
}
