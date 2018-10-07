import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';

@Injectable()
export class PaymentProviderService {
  private stripeInstance: any;
  private elementsInstance: any;
  constructor() {
    this.stripeInstance = Stripe(environment.stripe.apiPublishableKey);
    this.elementsInstance = this.stripeInstance.elements();
  }

  get stripe() {
    return this.stripeInstance;
  }

  get elements() {
    return this.elementsInstance;
  }
}
