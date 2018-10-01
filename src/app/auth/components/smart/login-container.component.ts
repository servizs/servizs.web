import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './../pure/login.component';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrls: ['./login-container.component.scss']
})
export class LoginContainerComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openSignupDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '400px'
      //  data: {name: this.name, animal: this.animal}
    });

    dialogRef.afterClosed().subscribe(result => {
      /* console.log('The dialog was closed');
      this.animal = result;*/
    });
  }

  ngOnInit() {}
}
