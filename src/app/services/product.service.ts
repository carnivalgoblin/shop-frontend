import {Injectable} from '@angular/core';
import {product} from "../entity/product";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) {
  }

  private productsApiUrl = 'http://localhost:8080/api/products';
  private userApiUrl = 'http://localhost:8080/api/user';

  getUser(userId: number) {
    const url = `${this.userApiUrl}/${userId}`;
    const headers = this.createHeaders();
    return this.http.get(url, {headers});
  }

  getProducts() {
    const headers = this.createHeaders();
    return this.http.get<product[]>(this.productsApiUrl, {headers});
  }

  getProductById(id: number) {
    const url = `${this.productsApiUrl}/${id}`;
    const headers = this.createHeaders();
    return this.http.get<product>(url, {headers});
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
