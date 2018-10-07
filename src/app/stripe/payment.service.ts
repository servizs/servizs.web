import { ElementRef, Injectable } from '@angular/core';
import { PaymentProviderService } from './payment-provider.service';

@Injectable()
export class PaymentService {
  constructor(private readonly paymentProviderService: PaymentProviderService) {}

  async saveCard(card: ElementRef) {
    const token = await this.createCardToken(card);

    if (token) {
      const customer = await this.paymentProviderService.stripe.customers.create({
        source: token,
        email: 'user@email.com'
      });

      const charge = await this.paymentProviderService.stripe.charges.create({
        amount: '1000',
        currency: 'usd',
        customer: customer.id
      });

      // NOTE: YOUR CODE: Save the customer ID and other info in a database for later.
      // Only customer ID needs to be stored in the database.
    }
  }

  async createCardToken(card: ElementRef): Promise<string> {
    const { token, error } = await this.paymentProviderService.stripe.createToken(card);

    if (error) {
      // dispatch card error
      return;
    }

    return token;
  }
}
