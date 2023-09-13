import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {UserService} from "../../services/user.service";
import {UserLoginFormComponent} from "../user-login-form/user-login-form.component";
import {UserRegistrationFormComponent} from "../user-registration-form/user-registration-form.component";

@Component({
  selector: 'account-view',
  templateUrl: './account-view.component.html',
  styleUrls: ['./account-view.component.scss']
})
export class AccountViewComponent implements OnInit {

  cart: any = [];
  user: any = {};

  @Input() userData = {Username: '', Password: ''}; // TODO MOVE TO LOGIN

  constructor(
    private userService: UserService,
    public dialog: MatDialog
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


      // if (localStorage.getItem('userId')) {
      //   this.dialog.open(UserLoginFormComponent) {
      //     width: '280px'
      //   }
      // }

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

  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  }

  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
      width: '280px'
    });
  }
}
