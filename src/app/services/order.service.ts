import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {CartService} from "./cart.service";
import {cart} from "../entity/cart";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderApiUrl = 'http://localhost:8080/api/order';

  constructor(
    private http: HttpClient,
    private cartService: CartService
  ) {
  }

  submitOrder(userId: number): void {
    const url = `${this.orderApiUrl}/${userId}/cart/submit`;
    this.http.post(url, {}).subscribe(response => {
        console.log('Order submitted: ', response);
        this.cartService.clearCart(userId); // TODO check if interfering with order submission
      },
      error => {
        console.error('Error submitting order:', error);
      });
  }

  getOrder(userId: number, orderId: number): void {
    const url = `${this.orderApiUrl}/${userId}/cart/${orderId}`;
    const headers = this.createHeaders();
    this.http.post(url, {}).subscribe(response => {
      console.log('Order retrieved: ', response);
      // TODO implement order entity
      // return this.http.get<order>(url, { headers });
    })
  }

  private createHeaders() {
    const username = 'rico';
    const password = 'testpasswort';
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });
  }
}
