import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-profile-container',
  templateUrl: './profile-container.component.html',
  styleUrls: ['./profile-container.component.css']
})
export class ProfileContainerComponent implements OnInit {
  private actionsSubscription: Subscription;

  constructor(private route: ActivatedRoute) {
    this.actionsSubscription = this.route.params
      .pipe(
        map(params => {
          console.log('window.location.search' + window.location.search);
          console.log(JSON.stringify(params));
        })
      )
      .subscribe();
  }

  ngOnInit() {}
}
