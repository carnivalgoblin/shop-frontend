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
    this.http.post(url, {}).subscribe(
      response => {
        console.log('Cart item added:', response);
      },
      error => {
        console.error('Error adding cart item:', error);
      }
    );
  }
}
