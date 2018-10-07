import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { PaymentProviderService } from '../../payment-provider.service';

@Component({
  selector: 'app-payment-details-container',
  templateUrl: './payment-details-container.component.html',
  styleUrls: ['./payment-details-container.component.css']
})
export class PaymentDetailsContainerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('cardInfo')
  cardInfo: ElementRef;

  card: any;
  cardHandler = this.onChange.bind(this);
  error: string;

  constructor(private cd: ChangeDetectorRef, private readonly paymentProviderService: PaymentProviderService) {}

  ngAfterViewInit() {
    this.card = this.paymentProviderService.elements.create('card');
    this.card.mount(this.cardInfo.nativeElement);

    this.card.addEventListener('change', this.cardHandler);
  }

  ngOnDestroy() {
    this.card.removeEventListener('change', this.cardHandler);
    this.card.destroy();
  }

  onChange({ error }) {
    if (error) {
      this.error = error.message;
    } else {
      this.error = null;
    }
    this.cd.detectChanges();
  }

  async onSubmit(form: any) {
    const { token, error } = await this.paymentProviderService.stripe.createToken(this.card);

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      // ...send the token to the your backend to process the charge
    }
  }
}
