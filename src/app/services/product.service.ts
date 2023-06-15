import { Injectable } from '@angular/core';
import {product} from "../entity/product";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
  ) { }

  private apiUrl = 'http://localhost:8080/api/products';

  getProducts() {
    const headers = this.createHeaders();
    return this.http.get<product[]>(this.apiUrl, { headers });
  }

  getProductById(id: number) {
    const url = `${this.apiUrl}/${id}`;
    const headers = this.createHeaders();
    return this.http.get<product>(url, { headers });
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
