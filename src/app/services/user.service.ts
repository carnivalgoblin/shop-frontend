import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {cart} from "../entity/cart";

const userApiUrl = 'http://localhost:8080/api/user';
const token = localStorage.getItem('token');
const username = localStorage.getItem('user');

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { }

  getUser() {
    const url = `${userApiUrl}/1`; // TODO implement UserLogin to get actual userIds
    const headers = this.createHeaders();
    return this.http.get(url, { headers });
  }

  getCart(userId: number) {
    const url = `${userApiUrl}/${userId}/cart`;
    const headers = this.createHeaders();
    return this.http.get<cart>(url, { headers });
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
