import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {cart} from "../entity/cart";
import {catchError, Observable, throwError} from "rxjs";

const userApiUrl = 'http://localhost:8080/api/user';
const token = localStorage.getItem('token');
const username = localStorage.getItem('user');

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUser() {
    const url = `${userApiUrl}/1`; // TODO implement UserLogin to get actual userIds
    const headers = this.createHeaders();
    return this.http.get(url, {headers});
  }

  public userLogin(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(userApiUrl + 'login', userDetails).pipe(
      catchError(this.handleError)
    );
  }

  public userRegistration(userDetails: any): Observable<any> {
    console.log(userDetails);
    return this.http.post(userApiUrl + 'users/register', userDetails).pipe(
      catchError(this.handleError)
    );
  }

  getCart(userId: number) {
    const url = `${userApiUrl}/${userId}/cart`;
    const headers = this.createHeaders();
    return this.http.get<cart>(url, {headers});
  }

  private createHeaders() {
    const username = 'rico';
    const password = 'testpasswort';
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(username + ':' + password)
    });
  }

  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('Some error occurred:', error.error.message);
    } else {
      console.error(
        `Error Status code ${error.status}, ` +
        `Error body is: ${error.error}`
      );
    }
    return throwError(
      'Something bad happened; please try again later'
    );
  }
}
