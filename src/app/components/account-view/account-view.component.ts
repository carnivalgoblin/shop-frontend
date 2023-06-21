import {Component, Input, OnInit} from '@angular/core';
import {cart} from "../../entity/cart";
import {UserService} from "../../services/user.service";
import {product} from "../../entity/product";

@Component({
  selector: 'account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.scss']
})
export class AccountViewComponent implements OnInit{

  cart: any = [];
  user: any = {};

  @Input() userData = { Username: '', Password: '' }; // TODO MOVE TO LOGIN

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit() {
    this.getUser();

  }

  getUser(): void {
    this.userService.getUser().subscribe((result) => {
      this.user = result;
      console.log(this.user.id);
      console.log(this.user.firstName);

      localStorage.setItem('id', this.user.id) // TODO move to login component, current user is logged here in regardless
      // TODO localStorage.getItem('id');

      this.getCart();
      return this.user;
    })
  }

  getCart(): void {
    this.userService.getCart(this.user.id).subscribe((result) => {
      this.cart = result;
      console.log(this.cart);
      return this.cart;
    })
  }

}
