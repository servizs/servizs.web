import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { URL } from '../../../shared/config';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Output()
  connectToStripEvent = new EventEmitter<void>();

  stripeUrl = '';

  constructor() {}

  ngOnInit() {
    this.stripeUrl = URL.stripeConnectUrl.replace('CLIENT_ID', environment.stripe.platformClient_id);
  }
}
