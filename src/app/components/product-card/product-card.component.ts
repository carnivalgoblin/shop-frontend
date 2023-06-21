import {Component, Input, OnInit} from '@angular/core';
import {product} from "../../entity/product";
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../../services/product.service";
import {MatDialog} from "@angular/material/dialog";
import {ProductModalComponent} from "../product-modal/product-modal.component";
import {CartService} from "../../services/cart.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {

  @Input() product: product = new product(0, "", 0, "", "", "")

  products: product[] = [];
  user: any = {};

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private userService: UserService,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    //this.getProduct();
    this.getProducts();
    this.getUser();
  }

  getUser(): void {
    this.userService.getUser().subscribe((result) => {
      this.user = result;
      console.log(this.user.id);
      console.log(this.user.firstName);

      localStorage.setItem('id', this.user.id) // TODO move to login component, current user is logged here in regardless
      // TODO localStorage.getItem('id');
      return this.user;
    })
  }

  // getProduct(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.productService.getProductById(id)
  //     .subscribe(product => this.product = product);
  // }

  getProducts(): void {
    //this.productService.getProducts().subscribe(product => this.products = product)
    this.productService.getProducts().subscribe((resp: any) => {
      this.products = resp;
      console.log(this.products)
      return this.products;
    })
  }

  addToCart(product: product): void {
    this.cartService.addToCart(product, this.user.id);
  }


  openProductDescription(product: product): void {
    const dialogRef = this.dialog.open(ProductModalComponent, {
      width: '500px',
      data: {description: product.description}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Das Dialogfenster wurde geschlossen')
    })
  }
}
