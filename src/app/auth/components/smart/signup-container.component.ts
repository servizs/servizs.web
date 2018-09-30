import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SignupComponent } from '../pure/signup.component';

@Component({
  selector: 'app-signup-container',
  templateUrl: './signup-container.component.html',
  styleUrls: ['./signup-container.component.css']
})
export class SignupContainerComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  openSignupDialog(): void {
    const dialogRef = this.dialog.open(SignupComponent, {
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
