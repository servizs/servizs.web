import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PaymentDetailsComponent } from './components/pure/payment-details.component';
import { PaymentDetailsContainerComponent } from './components/smart/payment-details-container.component';
import { PaymentProviderService } from './payment-provider.service';

@NgModule({
  imports: [CommonModule],
  declarations: [PaymentDetailsContainerComponent, PaymentDetailsComponent],
  providers: [PaymentProviderService]
})
export class StripeModule {}
