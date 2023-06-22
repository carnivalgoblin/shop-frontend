import {Injectable} from '@angular/core';
import {product} from "../entity/product";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private userApiUrl = 'http://localhost:8080/api/user';

  constructor(private http: HttpClient) {
  }

  addToCart(product: product, userId: number): void {
    const url = `${this.userApiUrl}/${userId}/cart/products/${product.id}?quantity=1`;
    this.http.post(url, {}).subscribe(response => {
        console.log('Cart item added:', response);
      },
      error => {
        console.error('Error adding cart item:', error);
      }
    );
  }

  removeFromCart(productId: number, userId: number): void {
    const url = `${this.userApiUrl}/${userId}/cart/${productId}/delete`;
    this.http.delete(url).subscribe(() => {
        console.log('product removed');
        location.reload();
      },
      error => {
        console.error('Error removing from cart:', error);
      }
    );
  }

  submitOrder(userId: number): void {
    const url = `${this.userApiUrl}/${userId}/cart/submit`;
    this.http.post(url, {}).subscribe(response => {
        console.log('Order submitted: ', response);
        this.clearCart(userId); // TODO check if clearing cart messes with order submission
      },
      error => {
        console.error('Error submitting order:', error);
      });
  }

  clearCart(userId: number): void {
    const url = `${this.userApiUrl}/${userId}/cart/delete`;
    this.http.delete(url).subscribe(() => {
        console.log('Cart cleared');
        location.reload();
      },
      error => {
        console.error('Error clearing cart:', error);
      }
    );
  }
}
