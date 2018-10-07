import { StripeModule } from './stripe.module';

describe('StripeModule', () => {
  let stripeModule: StripeModule;

  beforeEach(() => {
    stripeModule = new StripeModule();
  });

  it('should create an instance', () => {
    expect(stripeModule).toBeTruthy();
  });
});
