import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { environment } from '../../../../environments/environment';

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
  stripe: any;
  elements: any;
  constructor(private cd: ChangeDetectorRef) {
    this.stripe = Stripe(environment.stripe.apiPublishableKey);
    this.elements = this.stripe.elements();
  }

  ngAfterViewInit() {
    this.card = this.elements.create('card');
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
    const { token, error } = await this.stripe.createToken(this.card);

    if (error) {
      console.log('Something is wrong:', error);
    } else {
      console.log('Success!', token);
      // ...send the token to the your backend to process the charge
    }
  }
}
