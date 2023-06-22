import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {MatDialogRef} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";

@Component({
  selector: 'user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {

  @Input() userData = {Email: '', Password: ''};

  constructor(
    private userService: UserService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    // public snackBar: MatSnackBar,
    public router: Router
  ) {
  }

  ngOnInit(): void {
    ;
  }

  loginUser(): void {
    this.userService.userLogin(this.userData).subscribe((result) => {
      // Logic for a successful login goes here!
      this.dialogRef.close(); // Close modal on success
      console.log(result);
      // Add token and username to local Storage
      localStorage.setItem('token', result.token);
      localStorage.setItem('user', result.user.Username);
      // this.snackBar.open('Login successful!', 'OK', {
      //   duration: 2000
      // });
      this.router.navigate(['account']);
    }, (result) => {
      console.log(result);
      // this.snackBar.open(result, 'OK', {
      //   duration: 2000
      // });
    });
  }
}
