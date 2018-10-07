import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaymentDetailsComponent } from './components/pure/payment-details.component';
import { PaymentDetailsContainerComponent } from './components/smart/payment-details-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PaymentDetailsContainerComponent, PaymentDetailsComponent],
  providers: []
})
export class StripeModule {}
