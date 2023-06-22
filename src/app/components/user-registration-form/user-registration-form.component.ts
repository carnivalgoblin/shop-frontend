import {Component, Input, OnInit} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialogRef} from "@angular/material/dialog";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {

  @Input() userData = {Username: '', Password: '', Email: ''};

  constructor(
    public userService: UserService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    // public snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
  }

  registerUser() {
    this.userService.userRegistration(this.userData).subscribe((result) => {
      this.dialogRef.close();
      console.log(result);
      //   this.snackBar.open('Registration successful!', 'OK', {
      //     duration: 2000
      //   });
      // }, (result) => {
      //   console.log(result);
      //   this.snackBar.open(result, 'OK', {
      //     duration: 2000
      //   });
    });
  }
}
